import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// ✅ POST: Create a new leader
router.post("/", async (req, res) => {
  const { name, position, bio, image_url } = req.body;

  if (!name || !position) {
    return res.status(400).json({ error: "Name and position are required" });
  }

  try {
    const sql = `
      INSERT INTO leadership (name, position, bio, image_url, created_at)
      VALUES (?, ?, ?, ?, NOW())
    `;

    await pool.execute(sql, [name, position, bio, image_url || null]);

    res.status(201).json({ message: "Leader created successfully", leader: { name, position, bio, image_url } });
  } catch (err) {
    console.error("POST /api/leadership error:", err);
    res.status(500).json({ error: "Failed to create leader", details: err.message });
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
    res.status(500).json({ error: "Database error fetching leadership" });
  }
});

// ✅ UPDATE: Modify a leader
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, position, bio } = req.body;

  if (!name || !position) {
    return res.status(400).json({ error: "Name and position are required" });
  }

  try {
    await pool.execute(
      `UPDATE leadership SET name = ?, position = ?, bio = ? WHERE leader_id = ?`,
      [name, position, bio, id]
    );
    res.json({ message: "Leader updated successfully" });
  } catch (err) {
    console.error("PUT /api/leadership/:id error:", err);
    res.status(500).json({ error: "Failed to update leader", details: err.message });
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
    res.status(500).json({ error: "Failed to delete leader", details: err.message });
  }
});

export default router;
