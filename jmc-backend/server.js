import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import eventsRoutes from "./routes/eventsRoutes.js";
import devotionsRoutes from "./routes/devotionsRoutes.js";
import sermonsRoutes from "./routes/sermonsRoutes.js";
import leadershipRoutes from "./routes/leadershipRoutes.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

console.log("JWT_SECRET loaded:", process.env.JWT_SECRET ? "✅" : "❌");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/devotions", devotionsRoutes);
app.use("/api/sermons", sermonsRoutes);
app.use("/api/leadership", leadershipRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("JMC Backend is running");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    details: process.env.NODE_ENV === "development" ? err : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
