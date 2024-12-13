import { quizSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber } from "@/methods/FileUpload";

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
        if (!req.body || (Array.isArray(req.body) && req.body.length === 0)) {
            return res.status(400).json({ status: false, error: "Body is missing or invalid." });
        }

        // Check if the body is an array (multiple questions) or a single object (one question)
        const questions = Array.isArray(req.body) ? req.body : [req.body];

        // Validate each question using the schema
        for (const question of questions) {
            try {
                quizSchema.validate(question, { abortEarly: false });
            } catch (validationError) {
                const errors = validationError.inner.map((detail) => detail.message);
                return res.status(400).json({ status: false, error: errors });
            }
        }

        // Process each question
        const quizCreationPromises = questions.map(async ({ categoryId, question, options, answer, description }) => {
            console.log("Quiz data:", categoryId, question, options, answer, description);



            // Create the quiz
            const createdQuiz = await prisma.quiz.create({
                data: {
                    categoryId: ConvertNumber(categoryId),
                    question: question,
                    description: description,
                    answer: answer,
                },
            });

            // Create associated options
            const optionPromises = options.map((optionText) =>
                prisma.option.create({
                    data: {
                        text: optionText,
                        quizId: createdQuiz.id,
                    },
                })
            );
            await Promise.all(optionPromises);

            return createdQuiz;
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
        console.error("Post Error:", error);
        return res.status(500).json({
            status: false,
            error: "Internal Server Error",
            details: error.message,
        });
    }
};

const handlerGetRequest = async (req, res) => {
    try {


        const id = req.query?.id;
        const categoryId = req.query?.categoryId;
        if (categoryId) {
            const data = await prisma.quiz.findMany({
                where: {
                    categoryId: ConvertNumber(categoryId)
                }, include: {
                    options: true
                }
            });
            return res.status(200).json({
                status: true,
                data: data,

            });

        }
        if (id) {
            // Check if the quiz exists
            const existingQuiz = await prisma.quiz.findFirst({
                where: {
                    id: ConvertNumber(id)
                }
            });
            if (!existingQuiz) {
                return res.status(404).json({ status: false, message: "Quiz not found" });
            }
            const data = await prisma.quiz.findMany({
                where: {
                    id: ConvertNumber(id)
                }, include: {
                    options: true
                }
            });
            if (data) {
                return res.status(200).json(data);
            }
        }

        else {


            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const skip = (page - 1) * limit;
            const category = req.query.category;
            const value = req.query.value;
            const categoryId = ConvertNumber(category);

            if (category) {
                // Convert category to number (if valid)


                // Fetch quizzes by category
                const quizQuestion = await prisma.quiz.findMany({
                    where: {
                        categoryId: categoryId,
                    },
                    include: {
                        options: true,
                    },
                    take: limit,
                    skip: skip,
                });

                // Count total quizzes in the category
                const totalQuestion = await prisma.quiz.count({
                    where: {
                        categoryId: categoryId,
                    },
                });

                return res.status(200).json({
                    status: true,
                    data: quizQuestion,
                    currentPage: page,
                    totalPages: Math.ceil(totalQuestion / limit),
                });
            }


            if (category === "test") {
                // Fetch test quizzes
                const quizQuestion = await prisma.quiz.findMany({
                    where: {
                        categoryId: categoryId,
                    },
                    include: {
                        options: true,
                    },
                    take: 5,
                });

                return res.status(200).json({ status: true, data: quizQuestion });
            }

            // If neither category nor value is valid
            return res.status(400).json({ status: false, message: "Invalid query parameters provided." });
        }
    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        return res.status(500).json({ status: false, error: error.message || "Internal Server Error" });
    }
};


const handlerPutRequest = async (req, res) => {
    try {
        if (!req.body || !req.query.id) {
            return res.status(400).json({ status: false, message: "Body or ID is Missing." });
        }

        const id = ConvertNumber(req.query.id);

        if (!id || isNaN(id)) {
            return res.status(400).json({ status: false, message: "Invalid ID." });
        }

        // Validate Question
        const { error, value } = quizSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ status: false, message: error.details[0].message });
        } else {
            const { question, answer, categoryId, options, description } = value;

            // Update Question
            const updatedQuiz = await prisma.quiz.update({
                where: {
                    id: id
                },
                data: {
                    question: question,
                    answer: answer,
                    categoryId: ConvertNumber(categoryId),  // Ensure categoryId is set correctly
                    description: description,
                }
            });

            // Fetch existing options for the quiz
            const existingOptions = await prisma.option.findMany({
                where: { quizId: updatedQuiz.id },
            });

            // Process options for the quiz
            const optionPromises = options.map(async (optionText, index) => {
                const existingOption = existingOptions.find(
                    (option) => option.id === options[index]?.id
                );
                if (existingOption) {
                    // Update the existing option
                    return prisma.option.update({
                        where: { id: existingOption.id },
                        data: { text: optionText, quizId: updatedQuiz.id },
                    });
                } else {
                    // Create new option if it doesn't exist
                    return prisma.option.create({
                        data: { text: optionText, quizId: updatedQuiz.id },
                    });
                }
            });

            // Wait for all option updates to complete
            await Promise.all(optionPromises);

            // Optional: Delete options that are not in the request (if you want to remove outdated options)
            const optionIdsInRequest = options.map((option) => option?.id).filter(Boolean);
            const optionsToDelete = existingOptions.filter(
                (option) => !optionIdsInRequest.includes(option.id)
            );
            const deletePromises = optionsToDelete.map((option) =>
                prisma.option.delete({
                    where: { id: option.id },
                })
            );
            await Promise.all(deletePromises);

            // Return success response
            return res.status(200).json({
                status: true,
                message: "Quiz and options updated successfully.",
                data: updatedQuiz,
            });
        }
    } catch (error) {
        console.error("Error updating quiz or options:", error);
        return res.status(500).json({ status: false, message: "Oops! Something went wrong." });
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
