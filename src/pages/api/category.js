import { CategoriesSchema, CategorySchema } from "@/data_validator";
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
                await handleGetRequest(req, res);
                break;
            case "DELETE":
                await handleDeleteRequest(req, res);
                break;
            case "PUT":
                await handlePutRequest(req, res);
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
    try {
        // Ensure the request is a POST request
        if (req.method !== 'POST') {
            return res.status(405).json({ success: false, message: "Method Not Allowed" });
        }

        // Check if the request body is empty
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ success: false, message: "Request body is missing" });
        }

        // Validate the request body
        const { error, value } = CategorySchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                error: error.details[0]?.message || "Invalid data",
            });
        }

        // Extract `categoryName` from validated value
        const { categoryName } = value;

        const findCategory = await prisma.category.findFirst({
            where: {
                categoryName: categoryName
            }
        });
        if (!findCategory) {
            const category = await prisma.category.create({
                data: {
                    categoryName,
                },
            });

            // Respond with success
            return res.status(200).json({
                success: true,
                message: "Category created successfully",
                data: category,
            });
        }


        // Respond with success
        return res.status(401).json({
            success: false,
            message: "Category is Already Save",
            name: categoryName
        });
        //check category Name exist or not

        // Create the category in the database

    } catch (error) {
        console.error("Error in API handler:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
//const handlePostRequest = async (req, res) => {

//     try {
//         // Ensure the request is a POST request
//         if (req.method !== 'POST') {
//             return res.status(405).json({ success: false, message: "Method Not Allowed" });
//         }

//         // Check if the request body is empty
//         if (!req.body || Object.keys(req.body).length === 0) {
//             return res.status(400).json({ success: false, message: "Request body is missing" });
//         }

//         // Check if data is an array or a single object
//         const categories = Array.isArray(req.body) ? req.body : [req.body];

//         // Validate and filter data
//         const validatedCategories = [];
//         const errors = [];

//         for (const categoryData of categories) {
//             const { error, value } = CategoriesSchema.validate(categoryData);
//             if (error) {
//                 errors.push({ category: categoryData, error: error.details[0]?.message });
//             } else {
//                 validatedCategories.push(value.categoryName);
//             }
//         }

//         // If there are validation errors, return them
//         if (errors.length > 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Validation Errors in some items",
//                 errors,
//             });
//         }

//         // Check for duplicates in the database
//         const existingCategories = await prisma.category.findMany({
//             where: {
//                 categoryName: {
//                     in: validatedCategories,
//                 },
//             },
//             select: { categoryName: true },
//         });

//         const existingCategoryNames = existingCategories.map((cat) => cat.categoryName);
//         const newCategories = validatedCategories.filter((name) => !existingCategoryNames.includes(name));

//         // Create only new categories
//         if (newCategories.length > 0) {
//             const createdCategories = await prisma.category.createMany({
//                 data: newCategories.map((name) => ({ categoryName: name })),
//                 skipDuplicates: true, // Prevent inserting duplicates if Prisma supports it
//             });

//             return res.status(201).json({
//                 success: true,
//                 message: `${createdCategories.count} categories created successfully`,
//                 data: newCategories,
//             });
//         }

//         // If no new categories were added
//         return res.status(409).json({
//             success: false,
//             message: "All categories already exist",
//             existingCategories: existingCategoryNames,
//         });
//     } catch (error) {
//         console.error("Error in API handler:", error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

const handleGetRequest = async (req, res) => {
    try {

        const page = ConvertNumber(req.query.page) || 1;
        const limit = ConvertNumber(req.query.page) || 10;
        const skip = (page - 1) * limit;
        const category = req.query.category;
        if (category === "select_set") {
            const categoriesName = await prisma.category.findMany({
                where: {
                    isActive: true,
                    categoryName: {
                        startsWith: "Set"
                    }

                },
                select: {
                    categoryName: true,
                    id: true,
                }, take: limit,
                skip: skip
            });
            const totalSet = await prisma.category.count({
                where: {
                    isActive: true,
                    categoryName: {
                        startsWith: "Set"
                    }
                }
            })
            return res.status(200).json({ status: true, data: categoriesName, currentPage: page, totalSet: Math.ceil(totalSet / limit) })
        }
        if (category === "notset") {
            const categoriesName = await prisma.category.findMany({
                where: {
                    isActive: true,
                    categoryName: {
                        not: {
                            startsWith: "Set",
                        },
                    },
                },
                select: {

                    categoryName: true,
                    id: true,
                },
            });
            return res.status(200).json({ status: true, data: categoriesName });
        }
        const data = await prisma.category.findMany({
            where: {
                isActive: true,
            },
            select: {
                id: true,
                categoryName: true
            }
        });
        if (data) {
            res.status(200).json({ status: "ture", data: data });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const handleDeleteRequest = async (req, res) => {
    try {
        // Get the category ID from the query string
        const id = req.query?.id;

        // Ensure ID is provided in the query string
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Category ID is required."
            });
        }

        // Attempt to delete the category with the given ID
        const deleteCategory = await prisma.category.update({
            where: {
                id: parseInt(id), // Convert ID to an integer
            },
            data: {
                isActive: false,
            }
        });

        // If deletion is successful, send a success response
        if (deleteCategory) {
            return res.status(200).json({
                success: true,
                message: `Category with ID ${id} deleted successfully.`
            });
        }

        // If category not found or failed to delete, send a failure response
        return res.status(404).json({
            success: false,
            message: `Category with ID ${id} not found.`
        });

    } catch (error) {
        // Log the error and send a server error response
        console.error("Error in deleting category:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while attempting to delete the category."
        });
    }
};


//update
const handlePutRequest = async (req, res) => {
    try {
        // Extract category ID and new category name from the request body
        const { id, categoryName } = req.body;

        // Check if the category ID and name are provided
        if (!id || !categoryName) {
            return res.status(400).json({
                success: false,
                message: "Both category ID and category name are required."
            });
        }

        // Validate categoryName (using CategoriesSchema)
        const { error, value } = CategoriesSchema.validate({ categoryName });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                error: error.details[0]?.message || "Invalid category name"
            });
        }

        // Check if the category exists in the database
        const existingCategory = await prisma.category.findUnique({
            where: { id: parseInt(id) }
        });

        // If the category doesn't exist, return a 404 error
        if (!existingCategory) {
            return res.status(404).json({
                success: false,
                message: `Category with ID ${id} not found.`
            });
        }

        // Update the category name in the database
        const updatedCategory = await prisma.category.update({
            where: { id: parseInt(id) },
            data: { categoryName: value.categoryName } // Use validated value
        });

        // Respond with the updated category
        return res.status(200).json({
            success: true,
            message: `Category with ID ${id} updated successfully.`,
            data: updatedCategory
        });

    } catch (error) {
        // Log any error that occurs and respond with a 500 server error
        console.error("Error in updating category:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while attempting to update the category."
        });
    }
};



