import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("🔐 Auth middleware - Authorization header:", authHeader ? "✅ present" : "❌ missing");

  if (!token) {
    console.log("❌ No token found in authorization header");
    return res.status(401).json({ error: "No token provided" });
  }

  console.log("🔍 Verifying token...");
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("❌ JWT verification failed:", err.message);
      return res.status(403).json({ error: "Invalid or expired token", details: err.message });
    }
    console.log("✅ Token verified for user:", user);
    req.user = user;
    next();
  });
}
