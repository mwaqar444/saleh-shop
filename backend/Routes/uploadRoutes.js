import express from 'express';
import multer from 'multer';
import { protect, admin } from '../MiddleWare/authMiddleWare.js';
import cloudinary from '../Config/cloudinary.js';

const router = express.Router();

// Multer setup to handle file uploads
const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post('/', protect, admin, upload.single('image'), async (req, res) => {
  try {
    console.log('File received:', req.file); // Debugging
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'onlineShop',
    });

    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error('Cloudinary Upload Error:', error); // Log the error
    res.status(500).json({ message: 'Image upload failed' });
  }
});

export default router;