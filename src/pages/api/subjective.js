import { subjectiveQuestionSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber } from "@/utils/FileUpload";

export default async function handler(req, res) {
    try {
        await cors(req, res);
        switch (req.method) {
            case "POST":
                await handlePostRequest(req, res);
                break;
            case "GET":
                await handleGetRequest(req, res);
                break;
            case "PUT":
                break;

            default:
                break;
        }
    } catch (error) {
        console.log("Unexpected error:", error);
        return res.status(501).json({ error: 'Internal Server Error' });
    }

}
const handlePostRequest = async (req, res) => {
    try {
        console.log("Request body:", req.body);

        if (!req.body || (Array.isArray(req.body) && req.body.length === 0) || typeof req.body !== 'object') {
            return res.status(400).json({ status: false, error: "Body is Missing or Invalid." });
        }

        const questions = Array.isArray(req.body) ? req.body : [req.body];

        const validationResults = questions.map((question) =>
            subjectiveQuestionSchema.validate(question, { abortEarly: false })
        );
        const validationErrors = validationResults.filter(({ error }) => error);

        if (validationErrors.length > 0) {
            const errors = validationErrors
                .map(({ error }) => error.details.map((detail) => detail.message))
                .flat();
            return res.status(400).json({ status: false, error: errors });
        }

        const saveQuestionPromises = questions.map(async ({ question, categoryId, category }) => {
            console.log("Attempting to save question:", { question, categoryId, category });

            const existingQuestion = await prisma.subjectiveQuestionOnly.findFirst({
                where: {
                    question: question,
                    categoryId: ConvertNumber(categoryId),
                    category1: ConvertNumber(category)
                }
            });

            if (existingQuestion) {
                return { status: false, message: "Question already exists", data: existingQuestion };
            }

            const newQuestion = await prisma.subjectiveQuestionOnly.create({
                data: {
                    question: question,
                    categoryId: ConvertNumber(categoryId),
                    category1: ConvertNumber(category)
                }
            });
            return { status: true, message: "Question created successfully", data: newQuestion };
        });

        const addedQuestions = await Promise.all(saveQuestionPromises);

        return res.status(200).json({
            status: true,
            message: "Questions processed successfully",
            data: addedQuestions
        });

    } catch (error) {
        console.error("Error in handlePostRequest:", error.message || error);

        if (error.code === 'ERR_INVALID_ARG_TYPE') {
            return res.status(400).json({ status: false, error: "Invalid argument type provided." });
        }

        return res.status(500).json({ status: false, error: "Server Error" });
    }
};

const handleGetRequest = async (req, res) => {
    try {
        // Convert categoryId and handle invalid input
        let categoryId = req.query?.categoryId;

        if (!categoryId) {
            return res.status(400).json({ status: false, message: "Invalid or missing categoryId" });
        }

        // Fetch data from the database
        const data = await prisma.subjectiveQuestionOnly.findMany({
            where: {
                categoryId: ConvertNumber(categoryId)
            }
        })
        // Return the fetched data
        return res.status(200).json({ status: true, message: "Successfully fetched subjectiveQuestionOnly", data: data });

    } catch (error) {
        // Log detailed error information for debugging
        console.error("Error in handleGetRequest:", error);

        // Return a generic error response
        return res.status(500).json({ status: false, error: 'Internal Server Error', details: error.message });
    }
}
