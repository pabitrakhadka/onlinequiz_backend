import { subjectiveQuestionSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";

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

        const saveQuestionPromises = questions.map(async ({ question, category, category1 }) => {
            console.log("Attempting to save question:", { question, category, category1 });

            const existingQuestion = await prisma.subjectiveQuestionOnly.findFirst({
                where: { question, category, category1 }
            });

            if (existingQuestion) {
                return { status: false, message: "Question already exists", data: existingQuestion };
            }

            const newQuestion = await prisma.subjectiveQuestionOnly.create({
                data: { question, category, category1 }
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

        const category = req.query.category;
        if (category === "getcategory") {
            const data = await prisma.subjectiveQuestionOnly.findMany({
                select: {
                    category: true
                },
                distinct: ['category']
            });
            if (data) {
                return res.status(200).json({ status: true, message: "SuccessFull Get category", data: data })
            }
        }
        if (category) {
            const data = await prisma.subjectiveQuestionOnly.findMany({
                where: {
                    category: category
                }
            });
            if (data) {
                return res.status(200).json({ status: true, message: "SuccessFull Get subjectiveQuestionOnly", data: data })
            } else {
                return res.status(400).json({ status: false, message: "No Question Found" })
            }
        } else {
            return res.status(400).json({ status: false, message: "Server Error" })
        }
    } catch (error) {
        console.error("Post Error", error);
        return res.status(500).json({ status: false, error: 'Internal Server Error', details: error });
    }
}