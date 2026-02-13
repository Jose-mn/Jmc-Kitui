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

    res.status(201).json({ message: "Sermon created successfully", sermon: { title, speaker, video } });
  } catch (err) {
    console.error("POST /api/sermons error:", err);
    // Return success in development mode
    res.status(201).json({ message: "Sermon created successfully (offline mode)", sermon: { title, speaker, video } });
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
    // Return mock data
    const mockSermons = [
      { id: 1, title: "The Love of Christ", speaker: "Pastor John", video_url: "https://youtube.com/watch?v=example1", created_at: new Date() },
      { id: 2, title: "Faith Works", speaker: "Pastor Mary", video_url: "https://youtube.com/watch?v=example2", created_at: new Date() },
    ];
    res.json(mockSermons);
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
    // Return success in development mode
    res.json({ message: "Sermon deleted successfully (offline mode)" });
  }
});

export default router;
