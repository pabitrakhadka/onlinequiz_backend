
import multer from 'multer';

// Define the directory for image upload
const imageUploadDirectory = 'public/upload/images'; // Create an 'images' folder for images
const imageStorage = multer.diskStorage({
    destination: imageUploadDirectory,
    filename: (req, file, cb) => {
        return cb(null, Date.now() + "_" + file.originalname);
    }
});

const imageUpload = multer({ storage: imageStorage }).single('image'); // Handle image uploads
export { imageUpload };

// Define the directory for PDF upload
const pdfUploadDirectory = 'public/upload/pdf';
// Create a 'pdf' folder for PDFs
const pdfStorage = multer.diskStorage({
    destination: pdfUploadDirectory,
    filename: (req, file, cb) => {
        return cb(null, Date.now() + "_" + file.originalname);
    }
});

const pdfUpload = multer({ storage: pdfStorage }).single('pdfFile');

// Handle PDF uploads
export { pdfUpload };

//Define the directory for Excel upload

//String to Number Function
export const ConvertNumber = (input) => {
    // Check if the input is already a number
    if (typeof input === 'number' && !isNaN(input)) {
        return input; // Return the number directly
    }

    // Check if the input is a string and can be converted to a number
    if (typeof input === 'string' && !isNaN(input)) {
        return parseInt(input, 10); // Convert string to number
    }

    // If the input is neither a valid number nor a numeric string, return NaN
    return NaN;
};

