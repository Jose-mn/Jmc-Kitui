// Debug migration — tests one simple statement to find connection/syntax issues
import pool from "./config/db.js";

try {
  const [rows] = await pool.query("SHOW TABLES");
  console.log("EXISTING TABLES:");
  rows.forEach(r => console.log(" -", Object.values(r)[0]));
  process.exit(0);
} catch (e) {
  console.error("DB ERROR:", e.code, e.message);
  process.exit(1);
}
