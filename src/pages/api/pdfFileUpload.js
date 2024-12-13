import { pdfFileSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber, pdfUpload } from "@/methods/FileUpload";


export default async function handler(req, res) {
    try {

        await cors(req, res);

        switch (req.method) {
            case "POST":
                // await cors(req, res);
                await handlerPostRequest(req, res);
                break;
            case "GET":
                // await cors(req, res);
                await handlerGetRequest(req, res);
                break;
            case "DELETE":
                await handleDeleteRequest(req, res);
                break;
            case "PUT":
                // Implement PUT handler here
                break;
            default:
                return res.status(405).json({ error: "Method not allowed" });
        }
    } catch (error) {
        console.error("Error in handler:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


// Correctly define handlerPostRequest outside of the main handler
const handlerPostRequest = async (req, res) => {
    try {
        pdfUpload(req, res, async (uploadError) => {
            if (uploadError) {
                console.error("File upload error:", uploadError);
                return res.status(500).json({ error: "Error uploading PDF file" });
            }

            const { categoryId } = req.body;
            const fileName = req.file?.filename;

            console.log("fileName:", fileName);
            console.log("category (raw):", categoryId);

            if (!fileName) {
                return res.status(400).json({ error: "No file uploaded" });
            }

            if (!categoryId || isNaN(categoryId)) {
                return res.status(400).json({ error: "Invalid or missing category" });
            }

            const parsedCategory = ConvertNumber(categoryId);
            console.log("parsedCategory:", parsedCategory);

            try {
                const categoryExists = await prisma.category.findFirst({
                    where: { id: parsedCategory },
                });

                if (!categoryExists) {
                    return res.status(400).json({ error: "Category does not exist" });
                }



                const pdfFileSave = await prisma.pdfSubjectiveQuestion.create({
                    data: {
                        fileName: fileName,
                        categoryId: parsedCategory
                    }
                });

                // console.log("pdfFileSave:", pdfFileSave);


                return res.status(200).json({
                    status: true,
                    message: "PDF file uploaded successfully",
                    data: pdfFileSave,
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




const handlerGetRequest = async (req, res) => {
    try {
        const data = await prisma.pdfSubjectiveQuestion.findMany({
            include: {
                category: {
                    select: {
                        categoryName: true,
                    }
                }
            }
        });
        if (data) {
            return res.status(200).json({ data });
        }
        const id = req.query?.id;
        if (id) {

            const pdfFile = await prisma.pdfSubjectiveQuestion.findFirst({
                where: {
                    id: ConvertNumber(id)
                }
            })
            return res.status(200).json({ status: true, data: pdfFile });
        }
        const category = req.query.category;
        if (category) {
            const data = await prisma.pdfSubjectiveQuestion.findFirst({
                where: {
                    category: category
                }
            });
            if (data) {
                return res.status(200).json({ data });
            }
        }
        if (category === "all") {
            const data = await prisma.pdfSubjectiveQuestion.findMany();
            if (data) {
                return res.status(200).json({ data });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const handleDeleteRequest = async (req, res) => {
    try {
        const id = ConvertNumber(req.query?.id);  // Convert the id to a number

        // Check if id is valid
        if (!id) {
            return res.status(400).json({ error: "Invalid or missing id" });
        }

        // Attempt to delete the PDF record from the database
        const deletePdfFile = await prisma.pdfSubjectiveQuestion.delete({
            where: { id: id }
        });

        // If deletion is successful, return a success response
        return res.status(200).json({ status: true, message: "Successfully deleted file" });

    } catch (error) {
        console.error("Error in handleDeleteRequest:", error);  // Log the error for debugging
        return res.status(500).json({ error: "Internal server error" });  // Return a 500 error for server-side issues
    }
};

export const config = {
    api: {
        bodyParser: false,
    },
};