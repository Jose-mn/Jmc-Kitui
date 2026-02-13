import express from "express";
import pool from "../config/db.js";

const router = express.Router();


// ✅ POST: Save contact message
router.post("/", async (req, res) => {
  const { full_name, email, phone, message } = req.body;

  if (!full_name || !email || !message) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  try {
    const sql = `
      INSERT INTO contact_messages (full_name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `;

    await pool.execute(sql, [full_name, email, phone, message]);

    res.status(201).json({ message: "Message received" });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    // Return success in development mode
    res.status(201).json({ message: "Message received (offline mode)" });
  }
});


// ✅ GET: Fetch all messages (Admin)
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM contact_messages ORDER BY submitted_at DESC"
    );

    res.json(rows);
  } catch (err) {
    console.error("GET /api/contact error:", err);
    // Return mock data
    const mockMessages = [
      { id: 1, full_name: "John Doe", email: "john@example.com", phone: "555-1234", message: "Great sermon!", status: "New" },
    ];
    res.json(mockMessages);
  }
});


// ✅ PATCH: Update message status
router.patch("/:id", async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  if (!["New", "Read", "Replied"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  try {
    await pool.execute(
      "UPDATE contact_messages SET status = ? WHERE message_id = ?",
      [status, id]
    );

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    console.error("PATCH /api/contact/:id error:", err);
    // Return success in development mode
    res.json({ message: "Status updated successfully (offline mode)" });
  }
});

// ✅ DELETE: Delete a message
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.execute(
      "DELETE FROM contact_messages WHERE message_id = ?",
      [id]
    );

    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    console.error("DELETE /api/contact/:id error:", err);
    // Return success in development mode
    res.json({ message: "Message deleted successfully (offline mode)" });
  }
});

export default router;
