import { quizSchema } from "@/data_validator";
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
                break;
        }
    } catch (error) {
        console.log("Unexpected error:", error);
        return res.status(501).json({ error: 'Internal Server Error' });
    }
}


const handlerGetRequest = async (req, res) => {
    try {
        const { page = 1, limit = 5, categoryId, topicName } = req.query;
        console.log(categoryId);
        console.log(topicName);

        // Validate `page` and `limit` to ensure they are numbers
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);

        if (isNaN(pageNumber) || isNaN(limitNumber)) {
            return res.status(400).json({ status: false, error: "Invalid page or limit parameter" });
        }

        // Ensure `categoryId` and `topicName` are provided
        if (!categoryId || !topicName) {
            return res.status(400).json({ status: false, error: "Missing required parameters: categoryId or topicName" });
        }

        // Calculate pagination skip value
        const skip = (pageNumber - 1) * limitNumber;

        // Count the total number of questions for the category
        const countTotalQuestion = await prisma.quiz.count({
            where: {
                categoryId: parseInt(categoryId, 10),
            },
        });

        // Fetch the questions with pagination
        const quizzes = await prisma.quiz.findMany({
            where: {
                categoryId: ConvertNumber(categoryId)
            },
            include: {
                options: true, // Assuming options are related to the quiz
            },
            take: limitNumber,
            skip: skip,
        });

        // Calculate the total number of pages
        const totalPages = Math.ceil(countTotalQuestion / limitNumber);

        // Return the response with quizzes and pagination data
        return res.status(200).json({
            status: true,
            data: quizzes,
            totalQuestions: countTotalQuestion,
            currentPage: pageNumber,
            totalPages: totalPages,
        });

    } catch (error) {
        console.error("Error fetching quizzes:", error.message || error);
        return res.status(500).json({ status: false, error: "Internal Server Error" });
    }
};








