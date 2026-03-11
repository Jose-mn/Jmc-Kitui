import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|webp|gif/;
        const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = allowedTypes.test(file.mimetype);

        if (extName && mimeType) {
            return cb(null, true);
        } else {
            cb(new Error("Only images (jpeg, jpg, png, webp, gif) are allowed"));
        }
    },
});

// ✅ POST: Upload an image
// Returns the public URL of the uploaded image
router.post("/", upload.single("image"), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file provided" });
        }

        // Construct the public URL for the frontend to use
        const imageUrl = `/uploads/${req.file.filename}`;

        res.status(201).json({
            message: "Image uploaded successfully",
            imageUrl: imageUrl,
        });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "Image upload failed" });
    }
});

// ✅ GET: List all uploaded images
router.get("/", (req, res) => {
    try {
        const files = fs.readdirSync(uploadDir);
        const images = files
            .filter((f) => /\.(jpeg|jpg|png|webp|gif)$/i.test(f))
            .map((filename) => ({
                filename,
                imageUrl: `/uploads/${filename}`,
            }));
        res.json(images);
    } catch (error) {
        console.error("List uploads error:", error);
        res.status(500).json({ error: "Failed to list images" });
    }
});

// ✅ DELETE: Delete an uploaded image by filename
router.delete("/:filename", (req, res) => {
    try {
        const { filename } = req.params;
        // Prevent path traversal
        if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
            return res.status(400).json({ error: "Invalid filename" });
        }

        const filePath = path.join(uploadDir, filename);
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: "File not found" });
        }

        fs.unlinkSync(filePath);
        res.json({ message: "Image deleted successfully" });
    } catch (error) {
        console.error("Delete upload error:", error);
        res.status(500).json({ error: "Failed to delete image" });
    }
});

export default router;
