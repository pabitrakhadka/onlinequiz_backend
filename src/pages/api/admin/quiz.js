import { quizSchema } from "@/data_validator";
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
                await handlerGetRequest(req, res);
                break;
            case "PUT":
                await handlerPutRequest(req, res);
                break;
            case "DELETE":
                await handlerDeleteRequest(req, res);
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



        // Check if request body exists and is an object
        if (!req.body || (Array.isArray(req.body) && req.body.length === 0) || typeof req.body !== 'object') {
            return res.status(400).json({ status: false, error: "Body is Missing or Invalid." });
        }

        // Convert to array if a single object is sent
        const questions = Array.isArray(req.body) ? req.body : [req.body];

        // Validate each question using the schema
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

        // Process each question: check for existence and save if new
        const saveQuestionPromises = questions.map(async ({ question, category, category1 }) => {
            // Check if the question already exists
            const existingQuestion = await prisma.subjectiveQuestionOnly.findFirst({
                where: {
                    question,
                    category,
                    category1
                }
            });

            if (existingQuestion) {
                return { status: false, message: "Question already exists", data: existingQuestion };
            }

            console.log("existingQuestion=", existingQuestion);
            // If it does not exist, create the new question
            console.log("question", question);
            console.log("category", category);
            console.log("category1=", category1);

            // const newQuestion = await prisma.subjectiveQuestionOnly.create({
            //     data: { question, category, category1 }
            // });

            return { status: true, message: "Question created successfully" };
        });

        // Wait for all questions to be processed
        const addedQuestions = await Promise.all(saveQuestionPromises);

        return res.status(200).json({
            status: true,
            message: "Questions processed successfully",
            data: addedQuestions
        });

    } catch (error) {
        console.error("Error in handlePostRequest:", error);
        return res.status(500).json({ status: false, error: "Server Error" });
    }
};

const handlerGetRequest = async (req, res) => {
    try {
        const id = parseInt(req.query?.id, 10);

        // if (isNaN(id)) {
        //     return res.status(400).json({ status: false, message: "Invalid ID" });
        // }

        if (id) {
            // Check if the quiz exists
            const existingQuiz = await prisma.quiz.findUnique({ where: { id } });
            if (!existingQuiz) {
                return res.status(404).json({ status: false, message: "Quiz not found" });
            }
            const data = await prisma.quiz.findMany({
                where: {
                    id: id
                }, include: {
                    options: true
                }
            });
            if (id) {
                return res.status(200).json(data);
            }
        }

        const category = req.query.category;
        if (category === "getcategory") {

            const category = await prisma.quiz.findMany({
                select: {
                    category: true,

                },
                distinct: ['category']
            });

            res.status(200).json({ status: true, data: category });
        } else {
            console.log(category);
            const question = await prisma.quiz.findMany({
                where: {
                    category: category
                },
                include: {
                    options: true
                }
            })
            res.status(200).json({ status: true, data: question });
        }
    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
    }
};

const handlerPutRequest = async (req, res) => {
    try {
        const id = req.query.id;
        const { answer, question, options, category } = data;
        if (id) {
            const updateQuestion = await prisma.quiz.update({
                where: {
                    id: id
                }, data: {
                    answer: answer,
                    category: category
                }
            });

            //update optons
            const updateOption = await prisma.option.update({
                where: {
                    id: id,
                }, data: {
                    text: text
                }
            });
        }
    } catch (error) {
        console.log("errr")
    }
}

