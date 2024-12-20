
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber, imageUpload } from "@/utils/FileUpload";

export default async function handler(req, res) {
    try {
        // Initialize CORS middleware
        await cors(req, res);

        switch (req.method) {
            case "POST":
                await handlePostRequest(req, res);
                break;
            case "GET":
                await handleGetRequest(req, res);
            case "PUT":
                await handlePutRequest(req, res);
                break;
            case "DELETE":
                await handleDeletetRequest(req, res);
                break;
            default:
                res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
                break;
        }
    } catch (error) {
        console.error("Error in API handler:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const handlePostRequest = async (req, res) => {
    try {
        imageUpload(req, res, async (err) => {
            if (err) {
                console.error("File upload error:", err);
                return res.status(500).json({ error: "Error uploading image" });
            }

            const imageName = req.file?.filename;  // Get the image file name if uploaded
            if (!imageName) {
                return res.status(400).json({ error: "No file uploaded" });
            }

            const saveImage = await prisma.sliderImage.create({
                data: {
                    fileName: imageName
                }
            });
            if (saveImage) {
                return res.status(200).json({
                    message: "Data and image uploaded successfully",
                    data: saveImage,
                });
            } else {
                return res.status(500).json({ error: "Failed to save news" });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const handleGetRequest = async (req, res) => {
    const limit = ConvertNumber(req.query?.limi) || 5;
    const page = ConvertNumber(req.query?.page) || 1;
    const skip = (page - 1) * limit;

    try {
        const images = await prisma.sliderImage.findMany({
            where: {
                isActive: true
            },
            take: limit,
            skip: skip
        });

        if (images.length > 0) {
            res.status(200).json(images);
        } else {
            res.status(404).json({ message: "No images found" });
        }
    } catch (error) {
        console.error("Error in Get request handler:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const handlePutRequest = async (req, res) => {
    try {
        const id = ConvertNumber(req.query?.id);
        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }

        imageUpload(req, res, async (err) => {
            if (err) {
                console.error("File upload error:", err);
                return res.status(500).json({ error: "Error uploading image" });
            }

            const imageName = req.file?.filename;  // Get the image file name if uploaded
            if (!imageName) {
                return res.status(400).json({ error: "No file uploaded" });
            }

            const updateImage = await prisma.sliderImage.update({
                where: { id: id },
                data: { fileName: imageName }
            });

            if (updateImage) {
                return res.status(200).json({
                    message: "Image uploaded successfully",
                    data: updateImage,
                });
            } else {
                return res.status(500).json({ error: "Failed to update image" });
            }
        });
    } catch (error) {
        console.error("Error in Put request handler:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const handleDeletetRequest = async (req, res) => {
    try {
        const id = req.query?.id;
        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }

        const deleteData = await prisma.sliderImage.delete({
            where: {
                id: parseInt(id)
            }
        });

        if (deleteData) {
            return res.status(200).json({ success: true, message: "Deleted Successfully" });
        } else {
            return res.status(404).json({ success: false, message: "Image not found" });
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