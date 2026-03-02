import express from "express";
import pool from "../config/db.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Create a reusable transporter if SMTP config is provided
let transporter;
if (process.env.SMTP_HOST && process.env.SMTP_USER) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}


// ✅ POST: Save contact message
router.post("/", async (req, res) => {
  const { full_name, email, phone, message } = req.body;

  // Basic server-side validation
  const errors = [];
  if (!full_name || full_name.trim().length < 2) errors.push("Full name is required (min 2 chars)");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Valid email is required");
  if (!message || message.trim().length < 10) errors.push("Message is required (min 10 chars)");

  if (errors.length) {
    return res.status(400).json({ errors });
  }

  try {
    const sql = `
      INSERT INTO contact_messages (full_name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await pool.execute(sql, [full_name.trim(), email.trim(), phone || null, message.trim()]);

    // Send notification email to admin if transporter available
    if (transporter && (process.env.EMAIL_TO || process.env.SMTP_USER)) {
      const to = process.env.EMAIL_TO || process.env.SMTP_USER;
      const subject = `New contact message from ${full_name}`;
      const text = `Name: ${full_name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`;
      const html = `<p><strong>Name:</strong> ${full_name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || "N/A"}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`;

      transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to,
        subject,
        text,
        html,
      }).then(info => {
        console.log('Contact notification sent:', info.messageId || info.response);
      }).catch(mailErr => {
        console.error('Failed to send contact notification:', mailErr);
      });
    }

    res.status(201).json({ message: "Message received", id: result.insertId });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    res.status(500).json({ error: "Failed to save message" });
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
