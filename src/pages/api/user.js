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
                res.status(405).json({ status: false, message: "Method not allowed" }); // 405 for unsupported methods
                break;
        }
    } catch (error) {
        console.error("Error in Register API:", error);
        return res.status(500).json({ status: false, message: "Internal server error" }); // 500 for server errors
    }
}

const handlerPostRequest = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ status: false, message: "Request body is missing." }); // 400 for bad requests
        }

        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            return res.status(422).json({ status: false, message: error.details[0].message }); // 422 for validation errors
        }

        const { firstName, lastName, email, address, password } = value;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ status: false, message: "User already exists!" }); // 409 for conflict (duplicate user)
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await prisma.user.create({
            data: { firstName, lastName, email, address, password: hashedPassword },
        });

        // const user = { id: newUser.id, email: newUser.email };
        // const accessToken = generateAccessToken(user);
        // const refreshToken = generateRefreshToken(user);

        // res.setHeader("Set-Cookie", [
        //     `accessToken=${accessToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=900; Path=/`,
        //     `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=604800; Path=/`,
        // ]);

        return res.status(201).json({
            status: true,
            message: "User registered successfully",
            user: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
            }
        }); // 201 for successful resource creation
    } catch (error) {
        console.error("Error in Register Post Request:", error);
        return res.status(500).json({ status: false, message: "Internal server error" }); // 500 for server errors
    }
};
