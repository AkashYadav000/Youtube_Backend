
import multer from 'multer';
import path from 'path';

// Define storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/temp'); // Folder to temporarily store files
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Define file filter function
const checkFileType = (file, cb) => {
    // Allowed file extensions
    const fileTypes = /jpeg|jpg|png|gif|pdf/;  // Allowed formats
    // Check file extension
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // Check MIME type
    const mimetype = fileTypes.test(file.mimetype.toLowerCase());

    if (extname && mimetype) {
        return cb(null, true); // If both checks pass, accept the file
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and PDF are allowed.'), false); // If not, reject the file
    }
};
``
// Create multer instance with storage and file filter
export const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb); // Use file type checker in fileFilter
    }
});






// import multer from "multer";
 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/temp')
//     },
//     filename: function (req, file, cb) {

//       cb(null, file.originalname)
//     }
//   })
  
//  export const upload = multer({ storage, })