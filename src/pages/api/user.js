import { registerSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { hashPassword } from "@/utils/hashPassword";
import { generateAccessToken, generateRefreshToken } from "@/utils/token";

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
        console.error("Error in Register API:", error);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
}

const handlerPostRequest = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ status: false, message: "Request body is missing." });
        }

        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ status: false, message: error.details[0].message });
        }

        const { firstName, lastName, email, address, password } = value;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ status: false, message: "User already exists!" });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await prisma.user.create({
            data: { firstName, lastName, email, address, password: hashedPassword },
        });

        const user = { id: newUser.id, email: newUser.email };
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.setHeader("Set-Cookie", [
            `accessToken=${accessToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=900; Path=/`,
            `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=604800; Path=/`,
        ]);

        res.status(201).json({
            status: true,
            message: "User registered successfully",
            user: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
            },
            accessToken,
            refreshToken,
        });
    } catch (error) {
        console.error("Error in Register Post Request:", error);
        return res.status(500).json({ status: false, message: "Something went wrong" });
    }
};
