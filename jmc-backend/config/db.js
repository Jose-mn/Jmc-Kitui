import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbDir = path.join(__dirname, "..", "database");
const dbPath = path.join(dbDir, "church.db");

// Ensure database directory exists
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

// ----------------------------------------------------------------
// Initialize all tables on startup
// ----------------------------------------------------------------
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    message_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name   TEXT NOT NULL,
    email       TEXT NOT NULL,
    phone       TEXT,
    message     TEXT NOT NULL,
    status      TEXT DEFAULT 'New' CHECK(status IN ('New','Read','Replied')),
    submitted_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS events (
    event_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    title      TEXT NOT NULL,
    event_date TEXT NOT NULL,
    location   TEXT,
    image_url  TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS devotions (
    devotion_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT NOT NULL,
    scripture   TEXT,
    content     TEXT NOT NULL,
    image_url   TEXT,
    created_at  TEXT DEFAULT (datetime('now')),
    updated_at  TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS sermons (
    sermon_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    title      TEXT NOT NULL,
    speaker    TEXT NOT NULL,
    video_url  TEXT,
    audio_path TEXT,
    description TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS leadership (
    leader_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT NOT NULL,
    position   TEXT NOT NULL,
    bio        TEXT,
    image_url  TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS users (
    user_id       INTEGER PRIMARY KEY AUTOINCREMENT,
    username      TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    email         TEXT,
    role          TEXT DEFAULT 'Editor' CHECK(role IN ('Admin','Moderator','Editor')),
    created_at    TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS members (
    member_id       INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name      TEXT NOT NULL,
    last_name       TEXT NOT NULL,
    email           TEXT UNIQUE,
    phone           TEXT,
    gender          TEXT CHECK(gender IN ('Male','Female','Other')),
    date_of_birth   TEXT,
    address         TEXT,
    membership_date TEXT,
    photo           TEXT,
    status          TEXT DEFAULT 'Active' CHECK(status IN ('Active','Inactive')),
    created_at      TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS ministries (
    ministry_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT NOT NULL,
    description TEXT,
    leader_id   INTEGER REFERENCES members(member_id) ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS contributions (
    contribution_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    member_id         INTEGER REFERENCES members(member_id) ON DELETE SET NULL,
    amount            REAL NOT NULL,
    contribution_type TEXT NOT NULL,
    service_type      TEXT,
    payment_method    TEXT NOT NULL,
    reference_code    TEXT,
    notes             TEXT,
    contribution_date TEXT DEFAULT (datetime('now')),
    recorded_by       INTEGER REFERENCES users(user_id) ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS donations (
    donation_id    INTEGER PRIMARY KEY AUTOINCREMENT,
    member_id      INTEGER REFERENCES members(member_id) ON DELETE SET NULL,
    amount         REAL NOT NULL,
    donation_type  TEXT NOT NULL,
    date           TEXT DEFAULT (datetime('now')),
    payment_method TEXT,
    notes          TEXT
  );

  CREATE TABLE IF NOT EXISTS media (
    media_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    title        TEXT,
    description  TEXT,
    file_path    TEXT NOT NULL,
    upload_date  TEXT DEFAULT (datetime('now')),
    uploaded_by  INTEGER REFERENCES users(user_id) ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS testimonials (
    testimonial_id INTEGER PRIMARY KEY AUTOINCREMENT,
    member_id      INTEGER REFERENCES members(member_id) ON DELETE CASCADE,
    content        TEXT NOT NULL,
    date           TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS prayer_requests (
    prayer_id      INTEGER PRIMARY KEY AUTOINCREMENT,
    member_id      INTEGER REFERENCES members(member_id) ON DELETE CASCADE,
    content        TEXT NOT NULL,
    date_submitted TEXT DEFAULT (datetime('now')),
    status         TEXT DEFAULT 'Pending' CHECK(status IN ('Pending','Answered','Private'))
  );

  CREATE TABLE IF NOT EXISTS links (
    link_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name    TEXT,
    url     TEXT NOT NULL,
    type    TEXT DEFAULT 'Other' CHECK(type IN ('Facebook','WhatsApp','Instagram','Other'))
  );
`);

// Seed default admin user (ignore if already exists)
const existing = db.prepare("SELECT user_id FROM users WHERE username = 'admin'").get();
if (!existing) {
  db.prepare(
    "INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)"
  ).run(
    "admin",
    "admin@jmc.com",
    "$2b$10$RPBpJYXElvWn8BwUjO6njene0x7hI4eJCftrhuOtzL2rryFhxo71.",
    "Admin"
  );
  console.log("✅ Default admin user seeded.");
}

console.log("✅ SQLite database ready at:", dbPath);

// ----------------------------------------------------------------
// mysql2-compatible pool shim
// Supports: pool.execute(sql, params) and pool.query(sql, params)
// Returns [rows] for SELECT, [{ insertId, affectedRows }] for mutations
// ----------------------------------------------------------------
function translateSQL(sql) {
  // Replace MySQL NOW() with SQLite equivalent
  return sql.replace(/\bNOW\(\)/gi, "datetime('now')");
}

const pool = {
  execute: async (sql, params = []) => {
    const translated = translateSQL(sql.trim());
    const upper = translated.toUpperCase();

    try {
      if (upper.startsWith("SELECT") || upper.startsWith("SHOW") || upper.startsWith("PRAGMA")) {
        const rows = db.prepare(translated).all(...params);
        return [rows, []];
      } else if (upper.startsWith("INSERT")) {
        const result = db.prepare(translated).run(...params);
        return [{ insertId: result.lastInsertRowid, affectedRows: result.changes }, []];
      } else {
        const result = db.prepare(translated).run(...params);
        return [{ affectedRows: result.changes }, []];
      }
    } catch (err) {
      throw err;
    }
  },

  query: async (sql, params = []) => pool.execute(sql, params),
};

export default pool;
export { db };
