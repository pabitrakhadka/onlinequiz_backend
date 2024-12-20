import * as formidable from 'formidable';
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber } from "@/utils/FileUpload";

export default async function handler(req, res) {
    try {
        await cors(req, res);

        switch (req.method) {
            case "GET":
                await handlerGetRequest(req, res);
                break;

            default:
                return res.status(405).json({ error: "Method not allowed" });
        }
    } catch (error) {
        console.error("Error in handler:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const handlerGetRequest = async (req, res) => {
    try {

        //get set 1||set 2 mcq
        const categoryId = ConvertNumber(req.query?.categoryId);
        if (categoryId) {
            const data = await prisma.quiz.findMany({
                where: {
                    categoryId: categoryId
                }, include: {
                    options: true
                }
            });
            return res.status(200).json({ status: true, data: data });
        }
    } catch (error) {
        console.error("Error in handlerPostRequest:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};