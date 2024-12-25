
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";

export default async function handler(req, res) {
    try {
        // Initialize CORS middleware
        await cors(req, res);
        switch (req.method) {
            case "DELETE":
                await handleDeletetRequest(req, res);
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

const handleDeletetRequest = async (req, res) => {
    try {



    } catch (error) {
        console.error("Error in Delete request handler:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}