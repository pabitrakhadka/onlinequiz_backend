
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
const ConvertNumber = (input) => {

    if (typeof input === 'number' && !isNaN(input)) {

        return input;
    }
    if (typeof input === 'string' && !isNaN(input)) {
        return parseInt(input, 10); // Convert string to number
    }
    return NaN;
};

export { ConvertNumber }