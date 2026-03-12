import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// ✅ POST: Create a new sermon
router.post("/", async (req, res) => {
  const { title, speaker, video } = req.body;

  if (!title || !speaker || !video) {
    return res.status(400).json({ error: "Title, speaker, and video link are required" });
  }

  try {
    const sql = `
      INSERT INTO sermons (title, speaker, video_url, created_at)
      VALUES (?, ?, ?, NOW())
    `;

    await pool.execute(sql, [title, speaker, video]);

    res.status(201).json({ message: "Sermon created successfully", sermon: { title, speaker, video_url: video } });
  } catch (err) {
    console.error("POST /api/sermons error:", err);
    res.status(500).json({ error: "Failed to create sermon", details: err.message });
  }
});

// ✅ GET: Fetch all sermons
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM sermons ORDER BY created_at DESC"
    );

    res.json(rows);
  } catch (err) {
    console.error("GET /api/sermons error:", err);
    res.status(500).json({ error: "Database error fetching sermons" });
  }
});

// ✅ UPDATE: Modify a sermon
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, speaker, video } = req.body;

  if (!title || !speaker || !video) {
    return res.status(400).json({ error: "Title, speaker, and video link are required" });
  }

  try {
    await pool.execute(
      `UPDATE sermons SET title = ?, speaker = ?, video_url = ? WHERE sermon_id = ?`,
      [title, speaker, video, id]
    );
    res.json({ message: "Sermon updated successfully" });
  } catch (err) {
    console.error("PUT /api/sermons/:id error:", err);
    res.status(500).json({ error: "Failed to update sermon", details: err.message });
  }
});

// ✅ DELETE: Delete a sermon
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.execute("DELETE FROM sermons WHERE sermon_id = ?", [id]);

    res.json({ message: "Sermon deleted successfully" });
  } catch (err) {
    console.error("DELETE /api/sermons/:id error:", err);
    res.status(500).json({ error: "Failed to delete sermon", details: err.message });
  }
});

export default router;
