import { quizSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";

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
                break;
        }
    } catch (error) {
        console.log("Unexpected error:", error);
        return res.status(501).json({ error: 'Internal Server Error' });
    }
}

const handlerPostRequest = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ status: false, error: "Body is Missing or Invalid." });
        }

        // Check if the body is an array (multiple questions) or a single object (one question)
        const questions = Array.isArray(req.body) ? req.body : [req.body];

        // Validate each question using the schema
        const validationResults = questions.map((question) => quizSchema.validate(question, { abortEarly: false }));
        const validationErrors = validationResults.filter(({ error }) => error);

        if (validationErrors.length > 0) {
            const errors = validationErrors.map(({ error }) => error.details.map((detail) => detail.message)).flat();
            return res.status(400).json({ status: false, error: errors });
        }

        // Process each question
        const quizCreationPromises = questions.map(async ({ category, question, options, answer }) => {
            const addQuiz = await prisma.quiz.create({
                data: {
                    category,
                    question,
                    answer,
                },
            });

            const optionPromises = options.map((optionText) => {
                return prisma.option.create({
                    data: {
                        text: optionText,
                        quizId: addQuiz.id,
                    },
                });
            });
            await Promise.all(optionPromises);

            return addQuiz;
        });

        // Wait for all quizzes to be created
        const addedQuizzes = await Promise.all(quizCreationPromises);

        // Return success response
        return res.status(200).json({
            status: true,
            message: "Quiz and options created successfully",
            data: addedQuizzes,
        });

    } catch (error) {
        console.error("Post Error", error);
        return res.status(500).json({ status: false, error: 'Internal Server Error', details: error });
    }

}

const handlerGetRequest = async (req, res) => {
    try {
        const category = req.query.category;
        console.log("category=", category);
        if (category) {
            const quizQuestion = await prisma.quiz.findMany({
                where: {
                    category: category
                }, include: {
                    options: true
                },
                take: 5,
            });
            if (quizQuestion) {
                res.status(200).json({ status: true, data: quizQuestion })
            } else {
                res.status(400).json({ status: false, message: "Invalid value provided" });
            }
        }
        const value = req.query.value;
        if (value === "test") {
            console.log("value=", value);
            const quizQuestion = await prisma.quiz.findMany({
                include: {
                    options: true
                },
                take: 5
            });
            res.status(200).json({ status: true, data: quizQuestion });
        } else {
            res.status(400).json({ status: false, message: "Invalid value provided" });
        }
    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
    }
};
