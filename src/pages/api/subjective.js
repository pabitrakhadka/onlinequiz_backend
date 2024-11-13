export default async function handler(req, res) {
    try {
        switch (req.method) {
            case "POST":
                await handlePostRequest(req, res);
                break;
            case "GET":
            case "PUT":
                break;

            default:
                break;
        }
    } catch (error) {

    }

}
const handlePostRequest = async () => {
    try {

    } catch (error) {

    }
}