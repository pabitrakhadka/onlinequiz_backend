
import { slugSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber, imageUpload } from "@/utils/FileUpload";
import { getRandomId } from "@/utils/getRandomId";

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

// Separate function to handle POST requests
const handlePostRequest = async (req, res) => {
    try {
        const { error, value } = slugSchema.validate(req.body);
        if (error) {
            return res.status(405).json({ status: false, message: error.details[0].message });
        } else {
            const { title, description } = value;
            console.log("Values=", value);
            const saveData = await prisma.slug.create({
                data: {
                    title: title,
                    description: description
                }
            });
            if (saveData) {
                return res.status(200).json({
                    message: "Update successfully",
                    data: saveData,
                });
            } else {
                return res.status(500).json({ error: "Failed to save news" });
            }

        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const handleGetRequest = async (req, res) => {
    try {
        const id = ConvertNumber(req?.query?.id);
        if (id) {
            const slug = await prisma.slug.findFirst({
                where: {
                    id: id
                }
            });
            return res.status(200).json(slug);
        }
        const data = req?.query?.data;
        if (data === "one") {
            const ids = await prisma.slug.findMany({
                select: {
                    id: true
                }
            });

            const id = getRandomId(ids);

            const data = await prisma.slug.findFirst({
                where: {
                    id: id
                }
            });
            if (data) {
                return res.status(200).json({
                    message: "Update successfully",
                    data: data,
                });
            } else {
                return res.status(500).json({ error: "Failed to save news" });
            }
        }

        const slug = await prisma.slug.findMany({

        });
        return res.status(200).json(slug);


    } catch (error) {
        console.error("Error in Get request handler:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
const handlePutRequest = async (req, res) => {
    try {
        const id = ConvertNumber(req.query?.id);
        if (id) {
            const { error, value } = slugSchema.validate(req.body);
            if (error) {
                return res.status(405).json({ status: false, message: error.details[0].message });
            } else {
                const { title, description } = value;
                console.log("Values=", value);
                const saveData = await prisma.slug.update({
                    where: {
                        id: id
                    },
                    data: {
                        title: title,
                        description: description
                    }
                });
                if (saveData) {
                    return res.status(200).json({
                        message: "Update successfully",
                        data: saveData,
                    });
                } else {
                    return res.status(500).json({ error: "Failed to save news" });
                }
            }

        }

    } catch (error) {
        console.error("Error in Get request handler:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
const handleDeletetRequest = async (req, res) => {
    try {
        const id = req.query?.id;
        if (id) {
            const deleteData = await prisma.slug.delete({
                where: {
                    id: parseInt(id)
                }
            });
            if (deleteData) {
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

