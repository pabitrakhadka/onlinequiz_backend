import { loginSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import { verifyPassword } from "@/utils/hashPassword";
import { generateAccessToken, generateRefreshToken } from "@/utils/token";
import cors from "@/lib/cors-middleware";

export default async function handler(req, res) {
    try {
        await cors(req, res);
        switch (req.method) {
            case "POST":
                await handlerPostRequest(req, res);
                break;
            default:
                res.status(405).json({ status: false, message: "Method not allowed" });
                break;
        }
    } catch (error) {
        console.error("Error in Login API:", error);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
}

const handlerPostRequest = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ status: false, message: "Request body is missing." });
        }

        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ status: false, message: error.details[0].message });
        }

        const { email, password } = value;
        console.log("user email and password=", email, password);
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found!" });
        }

        const isPasswordValid = await verifyPassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ status: false, message: "Invalid credentials" });
        }


        const accessToken = generateAccessToken({ id: user.id, email: user.email });
        const refreshToken = generateRefreshToken({ id: user.id, email: user.email });

        // Save tokens in the database (e.g., storing refresh token and access token for tracking)
        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {

                token: refreshToken,
            }
        });
        res.setHeader("Set-Cookie", [
            `accessToken=${accessToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=900; Path=/`,
            `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=604800; Path=/`,
        ]);

        res.status(200).json({
            status: true,
            message: "Login successful",
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
            accessToken,
            refreshToken,
        });
    } catch (error) {
        console.error("Error in Login Post Request:", error);
        return res.status(500).json({ status: false, message: "Something went wrong" });
    }
};
