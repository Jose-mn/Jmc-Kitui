import dotenv from "dotenv";
dotenv.config();

let pool;

// ─── MySQL Database Configuration ───────────────────────────────────────────
const mysql = await import("mysql2/promise");

pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Test connection
try {
  await pool.execute("SELECT 1");
  console.log("✅ MySQL database connected.");
} catch (err) {
  console.error("❌ MySQL connection failed:", err.message);
  process.exit(1);
}

// Run migrations to create tables if they don't exist
await pool.execute(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    message_id  INT AUTO_INCREMENT PRIMARY KEY,
    full_name   VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    phone       VARCHAR(50),
    message     TEXT NOT NULL,
    status      ENUM('New','Read','Replied') DEFAULT 'New',
    submitted_at DATETIME DEFAULT NOW()
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS events (
    event_id   INT AUTO_INCREMENT PRIMARY KEY,
    title      VARCHAR(255) NOT NULL,
    event_date VARCHAR(100) NOT NULL,
    location   VARCHAR(255),
    image_url  TEXT,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW()
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS devotions (
    devotion_id INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    scripture   VARCHAR(255),
    content     TEXT NOT NULL,
    image_url   TEXT,
    created_at  DATETIME DEFAULT NOW(),
    updated_at  DATETIME DEFAULT NOW()
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS sermons (
    sermon_id   INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    speaker     VARCHAR(255) NOT NULL,
    video_url   TEXT,
    audio_path  TEXT,
    description TEXT,
    created_at  DATETIME DEFAULT NOW(),
    updated_at  DATETIME DEFAULT NOW()
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS leadership (
    leader_id  INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    position   VARCHAR(255) NOT NULL,
    bio        TEXT,
    image_url  TEXT,
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME DEFAULT NOW()
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS users (
    user_id       INT AUTO_INCREMENT PRIMARY KEY,
    username      VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email         VARCHAR(255),
    role          ENUM('Admin','Moderator','Editor') DEFAULT 'Editor',
    created_at    DATETIME DEFAULT NOW()
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS members (
    member_id       INT AUTO_INCREMENT PRIMARY KEY,
    first_name      VARCHAR(255) NOT NULL,
    last_name       VARCHAR(255) NOT NULL,
    email           VARCHAR(255) UNIQUE,
    phone           VARCHAR(50),
    gender          ENUM('Male','Female','Other'),
    date_of_birth   VARCHAR(50),
    address         TEXT,
    membership_date VARCHAR(50),
    photo           TEXT,
    status          ENUM('Active','Inactive') DEFAULT 'Active',
    created_at      DATETIME DEFAULT NOW()
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS ministries (
    ministry_id INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    description TEXT,
    leader_id   INT,
    FOREIGN KEY (leader_id) REFERENCES members(member_id) ON DELETE SET NULL
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS contributions (
    contribution_id   INT AUTO_INCREMENT PRIMARY KEY,
    member_id         INT,
    amount            DECIMAL(10,2) NOT NULL,
    contribution_type VARCHAR(255) NOT NULL,
    service_type      VARCHAR(255),
    payment_method    VARCHAR(255) NOT NULL,
    reference_code    VARCHAR(255),
    notes             TEXT,
    contribution_date DATETIME DEFAULT NOW(),
    recorded_by       INT,
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE SET NULL,
    FOREIGN KEY (recorded_by) REFERENCES users(user_id) ON DELETE SET NULL
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS donations (
    donation_id    INT AUTO_INCREMENT PRIMARY KEY,
    member_id      INT,
    amount         DECIMAL(10,2) NOT NULL,
    donation_type  VARCHAR(255) NOT NULL,
    date           DATETIME DEFAULT NOW(),
    payment_method VARCHAR(255),
    notes          TEXT,
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE SET NULL
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS media (
    media_id     INT AUTO_INCREMENT PRIMARY KEY,
    title        VARCHAR(255),
    description  TEXT,
    file_path    TEXT NOT NULL,
    upload_date  DATETIME DEFAULT NOW(),
    uploaded_by  INT,
    FOREIGN KEY (uploaded_by) REFERENCES users(user_id) ON DELETE SET NULL
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS testimonials (
    testimonial_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id      INT,
    content        TEXT NOT NULL,
    date           DATETIME DEFAULT NOW(),
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS prayer_requests (
    prayer_id      INT AUTO_INCREMENT PRIMARY KEY,
    member_id      INT,
    content        TEXT NOT NULL,
    date_submitted DATETIME DEFAULT NOW(),
    status         ENUM('Pending','Answered','Private') DEFAULT 'Pending',
    FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE
  )
`);

await pool.execute(`
  CREATE TABLE IF NOT EXISTS links (
    link_id INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(255),
    url     TEXT NOT NULL,
    type    ENUM('Facebook','WhatsApp','Instagram','Other') DEFAULT 'Other'
  )
`);

// Seed default admin user
const [existing] = await pool.execute(
  "SELECT user_id FROM users WHERE username = 'admin' LIMIT 1"
);
if (existing.length === 0) {
  await pool.execute(
    "INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
    [
      "admin",
      "admin@jmc.com",
      "$2b$10$RPBpJYXElvWn8BwUjO6njene0x7hI4eJCftrhuOtzL2rryFhxo71.",
      "Admin",
    ]
  );
  console.log("✅ Default admin user seeded.");
}

console.log("✅ MySQL tables ready.");

export default pool;