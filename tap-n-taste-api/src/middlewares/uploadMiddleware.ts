import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer with Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const folder = 'uploads'; // Customize folder name
    const resourceType = file.mimetype.startsWith('video') ? 'video' : 'image';

    return {
      folder,
      resource_type: resourceType,
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    };
  },
});

const upload = multer({ storage });

export const handleFileUpload = (req: Request, res: Response, next: NextFunction) => {
  const uploadHandler = upload.any(); // Accept any files

  uploadHandler(req, res, (err: any) => {
    if (err) {
      console.error('File upload error:', err);
      return res.status(400).json({ error: 'File upload failed', details: err.message });
    }

    if (req.files && Array.isArray(req.files)) {
      // Extract file URLs and attach them to the request
      const uploadedFiles = req.files.map((file: any) => ({
        url: file.path, // Cloudinary file URL
        originalname: file.originalname,
      }));
      req.body.uploadedFiles = uploadedFiles;
    }

    next();
  });
};
