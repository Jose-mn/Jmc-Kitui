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

    const [result] = await pool.execute(sql, [title, scripture, content, image_url || null]);

    res.status(201).json({
      message: "Devotion created successfully",
      devotion: { devotion_id: result.insertId, title, scripture, content, image_url }
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

// ✅ GET: Fetch a single devotion by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM devotions WHERE devotion_id = ?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Devotion not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("GET /api/devotions/:id error:", err);
    res.status(500).json({ error: "Failed to fetch devotion", details: err.message });
  }
});

// ✅ UPDATE: Modify a devotion (Protected)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, scripture, content, image_url } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    await pool.execute(
      `UPDATE devotions SET title = ?, scripture = ?, content = ?, image_url = ? WHERE devotion_id = ?`,
      [title, scripture, content, image_url || null, id]
    );
    res.json({ message: "Devotion updated successfully" });
  } catch (err) {
    console.error("PUT /api/devotions/:id error:", err);
    res.status(500).json({ error: "Failed to update devotion", details: err.message });
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
