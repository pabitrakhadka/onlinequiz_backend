import { newsSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { imageUpload } from "@/methods/FileUpload";
export default async function handler(req, res) {
    try {
        await cors(req, res);
        switch (req.method) {
            case "POST":
                await handlerPostRequest(req, res);
                break;
            case "GET":
                await handlerGetRequest(req, res);
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
                const imageName = req.file.filename;

                const saveNews = await prisma.news.create({
                    data: {
                        image: imageName,
                        description: description,
                        heading: heading
                    }
                })
                if (saveNews) {

                    return res.status(200).json({
                        message: "Data and image uploaded successfully",
                        data: saveNews
                    });
                }
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const handlerGetRequest = async (req, res) => {
    try {
        const id = req.query;

        console.log(id);
        if (id) {
            const data = await prisma.news.findFirst({
                where: {
                    id: parseInt(id)
                }
            });
            console.log(data);
            if (data) {

                res.status(200).json(data);
            } else {
                res.status(201).json({ status: false, message: "News Not found !" });
            }
        } else {
            const data = await prisma.news.findMany();
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(500).json({ error: "Internal Server Error" });
            }
        }


    } catch (error) {
        console.log('err', error);
    }
}
export const config = {
    api: {
        bodyParser: false,
    },
};