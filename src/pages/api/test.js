
import cors from "@/lib/cors-middleware";
import isUserValid from "@/utils/isUserValid";



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
        // Await the result of isUserValid function
        const validationResult = await isUserValid(req, res);

        if (!validationResult.valid) {
            // If the token is invalid, return an error response
            return res.status(401).json({ message: validationResult.message });
        }

        // Handle valid user response
        const { user, newAccessToken } = validationResult;

        console.log("User is valid:", validationResult);

        // Further actions based on valid user data, like updating user info, etc.
        return res.status(200).json({ message: "User is valid", user });
    } catch (error) {
        console.error("Error in handler:", error);
        return res.status(500).json({ error: "Internal server error" });
    }

};
