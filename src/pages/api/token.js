import prisma from "@/db/db.config";
import { verifyRefreshToken, generateAccessToken } from "@/utils/token";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(400).json({
                status: false,
                message: "Refresh token is required!",
            });
        }

        try {
            // Verify the refresh token
            const tokenVerification = verifyRefreshToken(refreshToken);

            if (!tokenVerification.status) {
                return res.status(401).json({
                    status: false,
                    message: "Invalid or expired refresh token",
                });
            }

            // Extract the user ID from the verified token payload
            const { id } = tokenVerification.data;

            // Ensure the user exists and the refresh token matches
            const user = await prisma.user.findUnique({
                where: { id },
                select: { token: true },
            });

            if (!user || user.token !== refreshToken) {
                return res.status(401).json({
                    status: false,
                    message: "Invalid refresh token",
                });
            }

            // Generate a new access token
            const accessToken = generateAccessToken({ id });

            return res.status(200).json({
                status: true,
                message: "Access token generated successfully",
                accessToken,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: "Something went wrong",
            });
        }
    } else {
        return res.status(405).json({
            status: false,
            message: "Method not allowed",
        });
    }
}
