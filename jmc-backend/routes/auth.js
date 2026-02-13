import express from "express";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

// ✅ POST: Admin login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  try {
    // Simple hardcoded authentication (replace with database check)
    // TODO: Implement proper user authentication with database
    if (email === "admin@jmc.com" && password === "admin123") {
      // Generate JWT token
      console.log("🔑 Generating JWT with SECRET:", process.env.JWT_SECRET ? "✅ present" : "❌ missing");
      const token = jwt.sign(
        { email, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      
      console.log("✅ Token generated successful");
      return res.json({ 
        message: "Login successful", 
        token,
        user: { email, role: "admin" }
      });
    }

    res.status(401).json({ error: "Invalid credentials" });
  } catch (err) {
    console.error("POST /api/auth/login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ POST: Admin logout
router.post("/logout", authenticateToken, (req, res) => {
  // Token-based auth - just confirm logout on frontend
  res.json({ message: "Logged out successfully" });
});

// ✅ GET: Verify token
router.get("/verify", authenticateToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

export default router;
