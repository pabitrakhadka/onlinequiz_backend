import { userDetailsScoreSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";
import { ConvertNumber } from "@/utils/FileUpload";

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
    const { userId, categoryId, score, timeTaken, userAnswers } = req.body;

    try {
        const { userId, categoryId, score, timeTaken, userAnswers } = req.body;
        // console.log("User id=", userId);
        // console.log("CategoryId=", categoryId);
        // console.log("Score=", score);
        // console.log("User id=", timeTaken);
        // console.log("User id=", userAnswers);


        // return res.status(200).json({ status: true, message: "success", })

        // Create a new quiz session for the user
        const newSession = await prisma.quizSession.create({
            data: {
                userId: parseInt(userId),
                categoryId: parseInt(categoryId),
                score: parseFloat(score),
                timeTaken: parseInt(timeTaken),
                attempt: 1,
            },
        });

        // Prepare quiz session details (for each answer)
        const sessionDetails = userAnswers.map((answer) => ({
            sessionId: newSession.id,
            questionId: parseInt(answer.question),
            isCorrect: answer.isCorrect,
            timeSpent: parseInt(answer.timeSpent || 0),
        }));


        // Insert the session details into the database
        await prisma.quizSessionDetail.createMany({
            data: sessionDetails,
        });

        return res.status(201).json({ message: 'Quiz session created successfully', session: "newSession" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to create quiz session.' });
    }
};

const handleGetRequest = async (req, res) => {
    try {
        // Fetch the quiz session for the given user and category
        const userScore = await prisma.quizSession.findUnique({
            where: {
                userId_categoryId: {
                    userId: parseInt(userId),
                    categoryId: parseInt(categoryId),
                },
            },
            include: {
                quiz: true, // Include quiz data (optional)
                user: true,  // Include user data (optional)
            },
        });

        if (!userScore) {
            return res.status(404).json({ message: 'Score not found for this user in the given category.' });
        }

        return res.status(200).json(userScore);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
}










