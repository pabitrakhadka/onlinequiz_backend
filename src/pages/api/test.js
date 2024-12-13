import * as formidable from 'formidable';

import { pdfFileSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber } from "@/methods/FileUpload";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    try {
        await cors(req, res);

        switch (req.method) {
            case "POST":
                await handlerPostRequest(req, res);
                break;

            default:
                return res.status(405).json({ error: "Method not allowed" });
        }
    } catch (error) {
        console.error("Error in handler:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const handlerPostRequest = async (req, res) => {
    try {
        const form = new formidable.IncomingForm();  // ES Module usage

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error("Form parse error:", err);
                return res.status(500).json({ error: "Error parsing form data" });
            }

            console.log(fields);  // This will contain 'categoryId' and 'fileName'

            const { categoryId, fileName } = fields;
            if (!categoryId || !fileName) {
                return res.status(400).json({ error: "Missing categoryId or fileName" });
            }

            const parsedCategory = ConvertNumber(categoryId);

            console.log(fileName);
            console.log(parsedCategory);
            console.log(typeof fileName);
            console.log(typeof parsedCategory);

            try {
                // Save to the database
                // const pdfFileSave = await prisma.pdfSubjectiveQuestion.create({
                //     data: {
                //         fileName: fileName,
                //         categoryId: parsedCategory,
                //     },
                // });

                // Return success response
                return res.status(200).json({
                    status: true,
                    message: "PDF file uploaded successfully",
                    data: "pdfFileSave",
                });
            } catch (dbError) {
                console.error("Database error:", dbError);
                return res.status(500).json({ error: "Error saving to database" });
            }
        });
    } catch (error) {
        console.error("Error in handlerPostRequest:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};