
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber, imageUpload } from "@/utils/FileUpload";
export default async function handler(req, res) {
    try {
        await cors(req, res);
        switch (req.method) {
            case "POST":
                await cors(req, res);
                await handlerPostRequest(req, res);
                break;
            case "GET":
                await cors(req, res);
                await handlerGetRequest(req, res);
                break;
            case "PUT":
                await cors(req, res);
                await handlerPutRequest(req, res);
                break;
            case "DELETE":
                await cors(req, res);
                await handlerDeleteRequest(req, res);
                break;

            default:
                res.status(405).json({ error: "Method not allowed" });
                break;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const handlerPostRequest = async (req, res) => {
    try {
        imageUpload(req, res, async (err) => {
            if (err) {
                console.error("File upload error:", err);
                return res.status(500).json({ error: "Error uploading image" });
            } else {
                const { heading, description } = req.body;
                const imageName = req.file?.filename;  // Get the image file name if uploaded

                // Prepare data to be saved
                const newsData = {
                    description: description,
                    heading: heading,
                };

                // If image is uploaded, include it in the data
                if (imageName) {
                    newsData.image = imageName;
                }

                // Create a new news entry in the database
                const saveNews = await prisma.news.create({
                    data: newsData,
                });



                if (saveNews) {
                    return res.status(200).json({
                        message: "Data and image uploaded successfully",
                        data: saveNews,
                    });
                } else {
                    return res.status(500).json({ error: "Failed to save news" });
                }
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const handlerGetRequest = async (req, res) => {
    try {
        const page = ConvertNumber(req.query?.page) || 1;
        const limit = ConvertNumber(req.query?.limit) || 6;
        const skip = (page - 1) * limit;
        const id = req.query?.id;

        if (id) {
            const data = await prisma.news.findFirst({
                where: {
                    id: ConvertNumber(id)
                }
            });
            res.status(200).json(data);
        } else {
            const data = await prisma.news.findMany({
                take: limit,
                skip: skip
            });
            const countNews = await prisma.news.count();
            if (data) {
                res.status(200).json({ status: true, data: data, currentPage: page, totalPage: Math.ceil(countNews / limit) });
            } else {
                res.status(500).json({ error: "Internal Server Error" });
            }
        }


    } catch (error) {
        console.log('err', error);
    }
}

const handlerPutRequest = async (req, res) => {
    try {
        const id = req.query?.id;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }

        // Use imageUpload middleware to handle file uploads
        imageUpload(req, res, async (err) => {
            if (err) {
                console.error("File upload error:", err);
                return res.status(500).json({ error: "Error uploading image" });
            }

            // Extract required fields from the request body
            const { heading, description } = req.body;
            const imageName = req.file?.filename;

            // Validate fields
            if (!heading || !description || !imageName) {
                return res.status(400).json({
                    error: "Heading, description, and image are required",
                });
            }

            try {
                // Update news in the database
                const updateNews = await prisma.news.update({
                    where: { id: ConvertNumber(id) },
                    data: {
                        image: imageName,
                        description,
                        heading,
                    },
                });

                // Return success response
                return res.status(200).json({
                    status: true,
                    message: "Data and image uploaded successfully",
                    data: updateNews, // Include updated data if needed
                });
            } catch (dbError) {
                console.error("Database update error:", dbError);
                return res
                    .status(500)
                    .json({ error: "Failed to update the news in the database" });
            }
        });
    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).json({ error: "An unexpected error occurred" });
    }
};

const handlerDeleteRequest = async (req, res) => {
    try {

        const id = req.query?.id;
        if (id) {
            const deleteNews = await prisma.news.delete({
                where: {
                    id: parseInt(id)
                }
            });
            if (deleteNews) {
                return res.status(200).json({ success: true, message: "Delete Successfully" });
            } else {
                return res.status(201).json({ success: false, message: "Opps! something went wrong !" });
            }
        }

    } catch (error) {
        console.error("Error in Delete request handler:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
export const config = {
    api: {
        bodyParser: false,
    },
};