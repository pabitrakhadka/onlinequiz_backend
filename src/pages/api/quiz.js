import { quizSchema } from "@/data_validator";
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
        // Validate request body
        if (!req.body || (Array.isArray(req.body) && req.body.length === 0)) {
            return res.status(400).json({
                status: false,
                error: "Body is missing or invalid.",
            });
        }

        const questions = Array.isArray(req.body) ? req.body : [req.body];

        // Validate each question using the schema
        for (const question of questions) {
            try {
                console.log("question=", question);
                await quizSchema.validateAsync(question, { abortEarly: false });
            } catch (validationError) {
                const errors = validationError.details.map((detail) => detail.message);
                return res.status(400).json({
                    status: false,
                    error: "Validation Error",
                    details: errors,
                });
            }
        }

        // Prepare bulk data for quizzes and options
        const quizData = [];
        const optionData = [];

        questions.forEach(({ categoryId, question, options, answer, description }) => {
            const numericCategoryId = ConvertNumber(categoryId); // Convert categoryId to number

            if (isNaN(numericCategoryId)) {
                throw new Error(`Invalid categoryId: ${categoryId}`);
            }

            // Prepare quiz data for bulk insertion
            quizData.push({
                categoryId: numericCategoryId,  // Correct assignment
                question,
                description,
                answer
            });

            // Prepare options data for bulk insertion
            options.forEach((optionText) => {
                optionData.push({
                    text: optionText,
                    quizId: null, // Will be updated later after quiz creation
                });
            });
        });

        // Insert quizzes in bulk
        const createdQuizzes = await prisma.quiz.createMany({
            data: quizData,
            skipDuplicates: true, // Skip duplicates based on unique constraints
        });

        // Get the quiz IDs after insertion to associate with options
        const createdQuizIds = createdQuizzes.count > 0 ? await prisma.quiz.findMany({
            where: {
                question: { in: quizData.map((q) => q.question) }
            },
            select: { id: true, question: true }
        }) : [];

        // Update option data with correct quiz IDs
        createdQuizIds.forEach((quiz, index) => {
            const quizId = quiz.id;
            const optionsForQuiz = optionData.slice(index * 4, (index + 1) * 4); // 4 options per quiz
            optionsForQuiz.forEach((option) => {
                option.quizId = quizId;
            });
        });

        // Insert options in bulk
        await prisma.option.createMany({
            data: optionData,
            skipDuplicates: true, // Skip duplicates based on unique constraints
        });

        // Return success response
        return res.status(200).json({
            status: true,
            message: "Quiz and options created successfully",
            data: createdQuizzes,
        });
    } catch (error) {
        console.error("Post Error:", error);

        // Handle specific Prisma errors if needed
        if (error.code && error.meta) {
            return res.status(400).json({
                status: false,
                error: "Database Error",
                details: error.meta,
            });
        }

        // Generic error response
        return res.status(500).json({
            status: false,
            error: "Internal Server Error",
            details: error.message,
        });
    }
};


// const page = parseInt(req.query.page) || 1;
// const limit = parseInt(req.query.limit) || 10;
// const skip = (page - 1) * limit;
// const { category, value, id, categoryId } = req.query;

// if (id) {
//     const quiz = await prisma.quiz.findFirst({
//         where: { id: ConvertNumber(id) },
//         include: { options: true },
//     });

//     if (!quiz) {
//         return res.status(404).json({ status: false, message: "Quiz not found" });
//     }

//     return res.status(200).json({ status: true, data: quiz });
// }

// if (categoryId) {
//     const quizzes = await prisma.quiz.findMany({
//         where: { categoryId: ConvertNumber(categoryId) },
//         include: { options: true },
//         take: limit,
//         skip,
//     });

//     const totalQuizzes = await prisma.quiz.count({ where: { categoryId: ConvertNumber(categoryId) } });

//     return res.status(200).json({
//         status: true,
//         data: quizzes,
//         currentPage: page,
//         totalPages: Math.ceil(totalQuizzes / limit),
//     });
// }

// if (category) {
//     const condition = category === "test" ? { category: "test" } : {};

//     const quizzes = await prisma.quiz.findMany({
//         where: { ...condition },
//         include: { options: true },
//         take: limit,
//         skip,
//     });

//     return res.status(200).json({ status: true, data: quizzes });
// }
const handlerGetRequest = async (req, res) => {
    try {
        // Convert the quizId query parameter
        const quizId = ConvertNumber(req.query?.quizId);
        const quiz = req.query?.quiz;

        // If quizId is provided, return specific quiz data
        if (quizId) {
            const quiz = await prisma.quiz.findFirst({
                where: {
                    id: quizId,
                },
                include: {
                    options: true,
                },
            });
            if (quiz) {
                return res.status(200).json({ status: true, data: quiz });
            } else {
                return res.status(404).json({ status: false, error: "Quiz not found" });
            }
        }

        // Default pagination parameters
        const { page = 1, limit = 5, categoryId, previousFetchedIds, topicName } = req.query;

        //fetch quiz by id
        // Fetch quiz by ID
        if (topicName && categoryId && limit && page) {
            try {
                console.log('Fetching quiz data');

                const pageNumber = parseInt(page, 10);
                const limitNumber = parseInt(limit, 10);

                // Validate if page and limit are valid numbers
                if (isNaN(pageNumber) || isNaN(limitNumber)) {
                    return res.status(400).json({ error: 'Invalid page or limit parameter' });
                }

                const categoryNumber = categoryId ? ConvertNumber(categoryId) : null;
                const skip = (pageNumber - 1) * limitNumber;

                // First, count the total number of questions
                const countTotalQuestion = await prisma.quiz.count({
                    where: {
                        categoryId: categoryNumber,
                    },
                });

                // Fetch the questions with pagination
                const data = await prisma.quiz.findMany({
                    where: {
                        categoryId: categoryNumber,
                    },
                    include: {
                        options: true,
                    },
                    take: limitNumber,
                    skip: skip,
                });

                return res.status(200).json({
                    data: data,
                    totalQuestion: countTotalQuestion,
                    currentPage: pageNumber,
                    totalPages: Math.ceil(countTotalQuestion / limitNumber),
                });
            } catch (error) {
                console.error('Error fetching quiz data:', error);
                return res.status(500).json({ error: 'Server error while fetching quiz data' });
            }
        }

        if (quiz === "quiz") {
            // Convert query parameters to numbers
            const pageNumber = parseInt(page, 10);
            const limitNumber = parseInt(limit, 10);
            const categoryNumber = categoryId ? ConvertNumber(categoryId) : null;
            const alreadyFetchedIds = previousFetchedIds ? previousFetchedIds.split(",").map(Number) : [];


            // Validate pagination values
            if (isNaN(pageNumber) || pageNumber < 1 || isNaN(limitNumber) || limitNumber < 1) {
                return res.status(400).json({
                    status: false,
                    error: "Invalid page or limit value. Must be a positive number.",
                });
            }


            // Pagination calculation
            const skip = (pageNumber - 1) * limitNumber;

            // Fetch questions and total count
            const [questions, countTotalQuestion] = await Promise.all([
                prisma.quiz.findMany({
                    where: {
                        categoryId: ConvertNumber(categoryId),
                        NOT: {
                            id: { in: alreadyFetchedIds },  // Exclude previously fetched quizzes
                        },
                    },
                    include: {
                        options: true,
                    },
                    take: limitNumber,
                    skip: skip,
                }),
                prisma.quiz.count({
                    where: {
                        categoryId: ConvertNumber(categoryId),
                        NOT: {
                            id: { in: alreadyFetchedIds },  // Exclude previously fetched quizzes
                        },
                    },
                }),
            ]);

            // Check if there are more quizzes
            const hasMoreQuizzes = questions.length < countTotalQuestion;

            // Respond with data
            return res.status(200).json({
                data: questions,
                totalQuestion: countTotalQuestion,
                currentPage: pageNumber,
                totalPages: Math.ceil(countTotalQuestion / limitNumber),
                hasMore: hasMoreQuizzes, // To help the frontend decide if more quizzes can be fetched
            });
        }

    } catch (error) {
        console.error("Error fetching quizzes:", error.message || error);
        return res.status(500).json({ status: false, error: "Internal Server Error" });
    }
};







const handlerDeleteRequest = async (req, res) => {
    try {
        let id = ConvertNumber(req.query?.id);
        if (isNaN(id)) {
            return res.status(400).json({ status: false, message: "Invalid ID" });
        }

        // Check if the quiz exists
        const existingQuiz = await prisma.quiz.findUnique({ where: { id } });
        if (!existingQuiz) {
            return res.status(404).json({ status: false, message: "Quiz not found" });
        }

        // Use transaction to delete related records and quiz
        const transactionResult = await prisma.$transaction([
            prisma.option.deleteMany({ where: { quizId: id } }), // deleteMany to handle multiple options
            prisma.quiz.delete({ where: { id } })
        ]);

        return res.status(200).json({ status: true, message: "Deleted successfully", data: transactionResult });
    } catch (error) {
        console.error("Error:", error);

        if (error.code === 'P2025') {
            // Prisma's record not found error
            return res.status(404).json({ status: false, message: "Record not found" });
        }

        return res.status(500).json({ status: false, message: "Oops! Something went wrong" });
    }
};
