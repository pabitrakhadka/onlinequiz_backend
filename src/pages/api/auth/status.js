import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber } from "@/utils/FileUpload";
import { generateAccessToken, verifyAccessToken, verifyRefreshToken } from "@/utils/token";
import { serialize } from "cookie";

export default async function handler(req, res) {
    try {

        await cors(req, res);
        // Allow only GET requests
        if (req.method !== "GET") {
            return res.status(405).json({ message: "Method Not Allowed" });
        }



        const { accessToken, refreshToken } = req.cookies;



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
                            secure: true,
                            sameSite: "none",
                            maxAge: 2 * 24 * 60 * 60,
                            path: "/",
                        })
                    );

                    const user = await prisma.user.findFirst({
                        where: {
                            id: id
                        }, select: {
                            firstName: true,
                            lastName: true
                        }
                    })
                    const responseUser = {
                        ...decoded?.data,
                        ...user
                    };
                    return res.status(200).json({
                        loggedIn: true,
                        user: responseUser,

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

                const user = await prisma.user.findFirst({
                    where: {
                        id: decoded?.data?.id
                    },
                    select: {
                        firstName: true,
                        lastName: true
                    }
                });
                const responseUser = {
                    ...decoded?.data,
                    ...user
                };
                return res.status(200).json({
                    loggedIn: true,
                    message: "Access token is valid.",
                    user: responseUser
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
