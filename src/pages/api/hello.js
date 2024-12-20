
import prisma from "@/db/db.config";
import cors from "@/lib/cors-middleware";

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

// Separate function to handle POST requests
const handlePostRequest = async (req, res) => {
  try {
    const { error, value } = contactSchema.validate(req.body);

    if (error) {

      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    const { firstName, lastName, email, message } = value;
    const saveData = await prisma.contacts.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
      }
    });
    if (saveData) {
      return res.status(200).json({ success: true, message: "Successfully Send", data: saveData });
    } else {
      return res.status(201).json({ success: false, message: "Opps! something went wrong !" });
    }

  } catch (error) {
    console.error("Error in POST request handler:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

const handleGetRequest = async (req, res) => {
  try {
    const category = req.query?.category;
    if (category === "all") {
      const data = await prisma.contacts.findMany({});

      if (data) {
        return res.status(200).json({ success: true, data: data });
      } else {
        return res.status(201).json({ success: false, message: "Opps! something went wrong !" });
      }
    }
    if (saveData) {
      return res.status(200).json({ success: true, data: value });
    } else {
      return res.status(201).json({ success: false, message: "Opps! something went wrong !" });
    }

  } catch (error) {
    console.error("Error in Get request handler:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

const handleDeletetRequest = async (req, res) => {
  try {

    const id = req.query?.id;
    if (id) {
      const deleteData = await prisma.contacts.delete({
        where: {
          id: parseInt(id)
        }
      });
      if (deleteData) {
        return res.status(200).json({ success: true, message: "Delete Successfully" });
      } else {
        return res.status(201).json({ success: false, message: "Opps! something went wrong !" });
      }
    }

  } catch (error) {
    console.error("Error in Delete request handler:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}