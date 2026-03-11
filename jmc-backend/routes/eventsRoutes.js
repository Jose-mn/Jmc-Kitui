import express from "express";
import pool from "../config/db.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();


// ✅ CREATE EVENT (Protected)
router.post("/", authenticateToken, async (req, res) => {
  const { title, date, location, image_url } = req.body;

  console.log("POST /api/events - User:", req.user);
  console.log("Request body:", { title, date, location, image_url });

  if (!title || !date) {
    return res.status(400).json({ error: "Title and date are required" });
  }

  try {
    const sql = `
      INSERT INTO events (title, event_date, location, image_url)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await pool.execute(sql, [title, date, location, image_url || null]);

    res.status(201).json({
      message: "Event created successfully",
      event: {
        id: result.insertId,
        title,
        date,
        location,
        image_url
      }
    });

  } catch (err) {
    console.error("POST /api/events error:", err);
    res.status(500).json({ error: "Failed to create event", details: err.message });
  }
});


// ✅ GET ALL EVENTS (Public)
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM events ORDER BY event_date DESC"
    );

    res.json(rows);

  } catch (err) {
    console.error("GET /api/events error:", err);
    res.status(500).json({ error: "Failed to fetch events", details: err.message });
  }
});


// ✅ UPDATE EVENT (Protected)
router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, event_date, location } = req.body;

  if (!title || !event_date) {
    return res.status(400).json({ error: "Title and date are required" });
  }

  try {
    await pool.execute(
      `UPDATE events 
       SET title = ?, event_date = ?, location = ?
       WHERE event_id = ?`,
      [title, event_date, location, id]
    );

    res.json({ message: "Event updated successfully" });

  } catch (err) {
    console.error("PUT /api/events error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// ✅ DELETE EVENT (Protected)
router.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await pool.execute(
      "DELETE FROM events WHERE event_id = ?",
      [id]
    );

    res.json({ message: "Event deleted successfully" });

  } catch (err) {
    console.error("DELETE /api/events error:", err);
    res.status(500).json({ error: "Failed to delete event", details: err.message });
  }
});

export default router;
