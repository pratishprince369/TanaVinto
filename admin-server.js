import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configure Multer for image and video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = 'public/images';
    if (req.body.folder === 'slider') {
      dir = 'public/images/slider';
    } else if (file.mimetype.startsWith('video/')) {
      dir = 'public/videos';
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

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

// API to upload image
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const folder = req.body.folder === 'slider' ? '/images/slider/' : '/images/';
  res.json({ url: folder + req.file.filename });
});

// Serve admin.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Admin server running at http://localhost:${PORT}`);
});
