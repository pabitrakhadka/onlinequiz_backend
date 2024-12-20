import { generateAccessToken, verifyAccessToken, verifyRefreshToken } from "@/utils/token";
import { serialize } from "cookie";

export default async function handler(req, res) {
    try {
        // Allow only GET requests
        if (req.method !== "POST") {
            return res.status(405).json({ message: "Method Not Allowed" });
        }

        const { accessToken, refreshToken } = req.body;

        console.log("AccessToken and RefreshToken:", accessToken, refreshToken);

        // No accessToken present
        if (!accessToken) {
            // No refreshToken provided either
            if (!refreshToken) {
                return res.status(401).json({
                    loggedIn: false,
                    message: "No tokens provided. Please log in again.",
                });
            }

            try {
                // Verify the refresh token
                const decoded = verifyRefreshToken(refreshToken);

                if (decoded?.status) {
                    const newAccessToken = generateAccessToken(decoded.data);

                    // Set the new access token in cookies
                    res.setHeader(
                        "Set-Cookie",
                        serialize("accessToken", newAccessToken, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV === "production",
                            sameSite: "Lax",
                            maxAge: 10 * 60, // 10 minutes
                            path: "/",
                        })
                    );

                    return res.status(200).json({
                        loggedIn: true,
                        user: decoded.data, // Exclude any sensitive details here
                        message: "Access token refreshed successfully.",
                    });
                } else {
                    return res.status(401).json({
                        loggedIn: false,
                        message: "Invalid refresh token. Please log in again.",
                    });
                }
            } catch (error) {
                console.error("Refresh token verification failed:", error);
                return res.status(401).json({
                    loggedIn: false,
                    message: "Error verifying refresh token. Please log in again.",
                });
            }
        }

        // If accessToken exists, validate it
        try {
            const decoded = verifyAccessToken(accessToken);

            if (decoded?.status) {
                return res.status(200).json({
                    loggedIn: true,
                    message: "Access token is valid.",
                    user: decoded.data, // Return user data
                });
            } else {
                return res.status(401).json({
                    loggedIn: false,
                    message: "Invalid access token. Please log in again.",
                });
            }
        } catch (error) {
            console.error("Access token verification failed:", error);
            return res.status(401).json({
                loggedIn: false,
                message: "Error verifying access token. Please log in again.",
            });
        }
    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).json({
            loggedIn: false,
            message: "An unexpected error occurred.",
        });
    }
}
