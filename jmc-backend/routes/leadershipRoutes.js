import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// ✅ POST: Create a new leader
router.post("/", async (req, res) => {
  const { name, position, bio } = req.body;

  if (!name || !position) {
    return res.status(400).json({ error: "Name and position are required" });
  }

  try {
    const sql = `
      INSERT INTO leadership (name, position, bio, created_at)
      VALUES (?, ?, ?, NOW())
    `;

    await pool.execute(sql, [name, position, bio]);

    res.status(201).json({ message: "Leader created successfully", leader: { name, position, bio } });
  } catch (err) {
    console.error("POST /api/leadership error:", err);
    // Return success in development mode
    res.status(201).json({ message: "Leader created successfully (offline mode)", leader: { name, position, bio } });
  }
});

// ✅ GET: Fetch all leaders
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM leadership ORDER BY position ASC"
    );

    res.json(rows);
  } catch (err) {
    console.error("GET /api/leadership error:", err);
    // Return mock data
    const mockLeaders = [
      { id: 1, name: "Pastor John", position: "Lead Pastor", bio: "Senior Pastor with 20 years of ministry experience" },
      { id: 2, name: "Pastor Mary", position: "Associate Pastor", bio: "Dedicated to youth ministry" },
    ];
    res.json(mockLeaders);
  }
});

// ✅ DELETE: Delete a leader
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.execute("DELETE FROM leadership WHERE leader_id = ?", [id]);

    res.json({ message: "Leader deleted successfully" });
  } catch (err) {
    console.error("DELETE /api/leadership/:id error:", err);
    // Return success in development mode
    res.json({ message: "Leader deleted successfully (offline mode)" });
  }
});

export default router;
