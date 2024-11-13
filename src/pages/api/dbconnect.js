import prisma from "@/db/db.config";

export default async function handler(req, res) {
    try {
        if (req.method == 'GET') {

            await prisma.$connect();
            return res.status(200).json({ message: "Database connected successfully" });
        }
    } catch (error) {
        // Handle any error that occurs during the connection attempt
        console.error(error); // Optionally log the error for debugging
        return res.status(500).json({ message: "Database connection failed", error: error.message });
    }
}
