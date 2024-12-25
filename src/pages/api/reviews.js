
import { reviewsSchema } from "@/data_validator";
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";


export default async function handler(req, res) {
    try {
        await cors(req, res);

        switch (req.method) {
            case "POST":
                await handlerPostRequest(req, res);
                break;

            default:
                return res.status(405).json({ error: "Method not allowed" });
        }
    } catch (error) {
        console.error("Error in handler:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
// Adjust the import path
const handlerPostRequest = async (req, res) => {
    try {
        const { error, value } = reviewsSchema.validate(req.body);

        // If validation fails, return a bad request response with the error message
        if (error) {
            console.log(error.details[0].message);
            return res.status(400).json({
                status: false,
                message: error.details[0].message
            });
        }

        // If validation succeeds, destructure the valid data
        const { userId, content, rating } = value;
        const saveReviews = await prisma.reviews.create({
            data: {
                content: content,
                rating: rating,
                userId: userId
            }
        })
        if (saveReviews) {
            return res.status(200).json({
                status: true,
                message: "Review submitted successfully",
                data: { userId, content, rating }  // Return the validated data if necessary
            });
        } else {
            return res.status(500).json({
                status: false,
                message: "Internal server error",
                // Return the validated data if necessary
            });
        }



    } catch (error) {
        console.error("Error in handler:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
