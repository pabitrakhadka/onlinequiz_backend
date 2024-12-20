import { loginSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import { verifyPassword } from "@/utils/hashPassword";
import { generateAccessToken, generateRefreshToken } from "@/utils/token";
import cors from "@/lib/cors-middleware";
import { serialize } from 'cookie';
import setAuthCookies from "@/utils/SetCookies";
import { ConvertNumber } from "@/utils/FileUpload";

export default async function handler(req, res) {
    try {
        await cors(req, res);
        switch (req.method) {
            case "POST":
                await handlerPostRequest(req, res);
                break;
            case "GET":
                await logoutHandler(req, res);
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
        // Serialize cookies

        await setAuthCookies(res, accessToken, refreshToken);

        res.status(200).json({
            status: true,
            message: "Login successful",
            data: {
                id: user.id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                accessToken: accessToken,
                refreshToken: refreshToken,
            },

        });
    } catch (error) {
        console.error("Error in Login Post Request:", error);
        return res.status(500).json({ status: false, message: "Something went wrong" });
    }
};

const logoutHandler = async (req, res) => {

    try {
        const id = req.query?.id;
        if (!id) {

        }
        const isUser = await prisma.user.findFirst({
            where: {
                id: ConvertNumber(id)
            }
        })
        if (isUser) {
            const updateToken = await prisma.user.update({
                where: {
                    id: isUser.id
                }, data: {
                    token: null
                }
            });
        }
        res.setHeader('Set-Cookie', [
            serialize('accessToken', '', { maxAge: 0, path: '/' }),
            serialize('refreshToken', '', { maxAge: 0, path: '/' }),
        ]);
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {

    }
};