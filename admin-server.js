import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Configure Multer for temporary storage before Cloudinary upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// API to get content
app.get('/api/content', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'src/content.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read content' });
  }
});

// API to update content
app.post('/api/content', async (req, res) => {
  try {
    await fs.writeFile(path.join(__dirname, 'src/content.json'), JSON.stringify(req.body, null, 2));
    res.json({ message: 'Content updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

// API to upload to Cloudinary
app.post('/api/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    // Determine resource type (image or video)
    const resourceType = req.file.mimetype.startsWith('video/') ? 'video' : 'image';
    
    // Upload to Cloudinary using a stream
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'tanavinto',
        resource_type: resourceType,
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: 'Cloudinary upload failed' });
        }
        res.json({ url: result.secure_url });
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.error('Upload process error:', error);
    res.status(500).json({ error: 'Upload process failed' });
  }
});

// Serve admin.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin.html'));
});

app.listen(PORT, () => {
  console.log(`Admin server running at http://localhost:${PORT}`);
});
