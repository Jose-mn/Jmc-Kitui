import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// ✅ POST: Create a new devotion
router.post("/", async (req, res) => {
  const { title, scripture, content, image_url } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const sql = `
      INSERT INTO devotions (title, scripture, content, image_url, created_at)
      VALUES (?, ?, ?, ?, NOW())
    `;

    await pool.execute(sql, [title, scripture, content, image_url || null]);

    res.status(201).json({
      message: "Devotion created successfully",
      devotion: { title, scripture, content, image_url }
    });
  } catch (err) {
    console.error("POST /api/devotions error:", err);
    res.status(500).json({ error: "Failed to create devotion", details: err.message });
  }
});

// ✅ GET: Fetch all devotions
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM devotions ORDER BY created_at DESC"
    );

    res.json(rows);
  } catch (err) {
    console.error("GET /api/devotions error:", err);
    res.status(500).json({ error: "Failed to fetch devotions", details: err.message });
  }
});

// ✅ DELETE: Delete a devotion
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.execute("DELETE FROM devotions WHERE devotion_id = ?", [id]);

    res.json({ message: "Devotion deleted successfully" });
  } catch (err) {
    console.error("DELETE /api/devotions/:id error:", err);
    res.status(500).json({ error: "Failed to delete devotion", details: err.message });
  }
});

export default router;
