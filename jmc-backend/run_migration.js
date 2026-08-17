// Run with: node run_migration.js
// Adds new tables to the existing jesus_manifestation_church database

import pool from "./config/db.js";

const statements = [
  // Users / Admins
  `CREATE TABLE IF NOT EXISTS users (
    user_id       INT AUTO_INCREMENT PRIMARY KEY,
    username      VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email         VARCHAR(150),
    role          ENUM('Admin','Moderator','Editor') DEFAULT 'Editor',
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,

  // Members
  `CREATE TABLE IF NOT EXISTS members (
    member_id       INT AUTO_INCREMENT PRIMARY KEY,
    first_name      VARCHAR(100) NOT NULL,
    last_name       VARCHAR(100) NOT NULL,
    email           VARCHAR(150) UNIQUE,
    phone           VARCHAR(30),
    gender          ENUM('Male','Female','Other'),
    date_of_birth   DATE,
    address         TEXT,
    membership_date DATE,
    photo           VARCHAR(255),
    status          ENUM('Active','Inactive') DEFAULT 'Active',
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,

  // Ministries
  `CREATE TABLE IF NOT EXISTS ministries (
    ministry_id INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(150) NOT NULL,
    description TEXT,
    leader_id   INT,
    CONSTRAINT fk_ministry_leader
      FOREIGN KEY (leader_id) REFERENCES members(member_id)
      ON DELETE SET NULL
  )`,

  // Contributions
  `CREATE TABLE IF NOT EXISTS contributions (
    contribution_id   INT AUTO_INCREMENT PRIMARY KEY,
    member_id         INT NULL,
    amount            DECIMAL(10,2) NOT NULL,
    contribution_type ENUM('Tithe','Offering','Thanksgiving','Seed','Pledge','Other') NOT NULL,
    service_type      ENUM('Sunday Service','Midweek Service','Youth Service','Special Event','Online'),
    payment_method    ENUM('Cash','Bank Transfer','Mobile Money','Online') NOT NULL,
    reference_code    VARCHAR(100),
    notes             TEXT,
    contribution_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    recorded_by       INT,
    CONSTRAINT fk_contribution_member
      FOREIGN KEY (member_id) REFERENCES members(member_id)
      ON DELETE SET NULL,
    CONSTRAINT fk_contribution_recorder
      FOREIGN KEY (recorded_by) REFERENCES users(user_id)
      ON DELETE SET NULL
  )`,

  // Donations
  `CREATE TABLE IF NOT EXISTS donations (
    donation_id    INT AUTO_INCREMENT PRIMARY KEY,
    member_id      INT NULL,
    amount         DECIMAL(10,2) NOT NULL,
    donation_type  ENUM('Tithe','Offering','Special') NOT NULL,
    date           DATETIME DEFAULT CURRENT_TIMESTAMP,
    payment_method ENUM('Cash','Bank Transfer','Mobile Money','Online'),
    notes          TEXT,
    CONSTRAINT fk_donation_member
      FOREIGN KEY (member_id) REFERENCES members(member_id)
      ON DELETE SET NULL
  )`,

  // Media
  `CREATE TABLE IF NOT EXISTS media (
    media_id     INT AUTO_INCREMENT PRIMARY KEY,
    title        VARCHAR(200),
    description  TEXT,
    file_path    VARCHAR(255) NOT NULL,
    upload_date  DATETIME DEFAULT CURRENT_TIMESTAMP,
    uploaded_by  INT,
    CONSTRAINT fk_media_uploader
      FOREIGN KEY (uploaded_by) REFERENCES users(user_id)
      ON DELETE SET NULL
  )`,

  // Testimonials
  `CREATE TABLE IF NOT EXISTS testimonials (
    testimonial_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id      INT,
    content        TEXT NOT NULL,
    date           DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_testimonial_member
      FOREIGN KEY (member_id) REFERENCES members(member_id)
      ON DELETE CASCADE
  )`,

  // Prayer Requests
  `CREATE TABLE IF NOT EXISTS prayer_requests (
    prayer_id      INT AUTO_INCREMENT PRIMARY KEY,
    member_id      INT,
    content        TEXT NOT NULL,
    date_submitted DATETIME DEFAULT CURRENT_TIMESTAMP,
    status         ENUM('Pending','Answered','Private') DEFAULT 'Pending',
    CONSTRAINT fk_prayer_member
      FOREIGN KEY (member_id) REFERENCES members(member_id)
      ON DELETE CASCADE
  )`,

  // Links / Social
  `CREATE TABLE IF NOT EXISTS links (
    link_id INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(100),
    url     VARCHAR(255) NOT NULL,
    type    ENUM('Facebook','WhatsApp','Instagram','Other') DEFAULT 'Other'
  )`,

  // Ensure events table has the image_url column used by seed data
  `ALTER TABLE events ADD COLUMN image_url VARCHAR(500)`,

  // Seed admin user (INSERT IGNORE skips if already present)
  `INSERT IGNORE INTO users (username, email, password_hash, role)
   VALUES (
     'admin',
     'admin@jmc.com',
     '$2b$10$RPBpJYXElvWn8BwUjO6njene0x7hI4eJCftrhuOtzL2rryFhxo71.',
     'Admin'
   )`,

  // Seed recurring events (idempotent by title + event_date)
  `INSERT INTO events (title, event_date, location, description, image_url, created_by)
   SELECT 'Midweek Prayer (Tuesday)', '2026-03-24', 'JMC Kitui', 'Every Tuesday 5:30 PM - 7:00 PM: prayer, worship and intercession.', NULL, NULL
   WHERE NOT EXISTS (
     SELECT 1 FROM events WHERE title = 'Midweek Prayer (Tuesday)' AND event_date = '2026-03-24'
   )`,

  `INSERT INTO events (title, event_date, location, description, image_url, created_by)
   SELECT 'Midweek Prayer (Thursday)', '2026-03-26', 'JMC Kitui', 'Every Thursday 5:30 PM - 7:00 PM: prayer meeting for community blessing.', NULL, NULL
   WHERE NOT EXISTS (
     SELECT 1 FROM events WHERE title = 'Midweek Prayer (Thursday)' AND event_date = '2026-03-26'
   )`,

  `INSERT INTO events (title, event_date, location, description, image_url, created_by)
   SELECT 'Kesha Gathering', '2026-03-28', 'JMC Kitui', 'First and last Friday of the month: Kesha worship experience.', NULL, NULL
   WHERE NOT EXISTS (
     SELECT 1 FROM events WHERE title = 'Kesha Gathering' AND event_date = '2026-03-28'
   )`,
];

async function runMigration() {
  console.log("🚀 Running migration...\n");
  let success = 0;
  let failed = 0;

  for (const sql of statements) {
    const name = sql.trim().split("\n")[0].substring(0, 70);
    try {
      await pool.query(sql);
      console.log(`✅ OK: ${name}`);
      success++;
    } catch (err) {
      if (err.code === "ER_TABLE_EXISTS_ERROR" || err.code === "ER_DUP_FIELDNAME") {
        console.log(`⚠️  Already exists (skipped): ${name}`);
        success++;
      } else {
        console.error(`❌ FAILED: ${name}\n   Error: ${err.message}`);
        failed++;
      }
    }
  }

  console.log(`\n✔ Migration complete — ${success} OK, ${failed} failed.`);
  process.exit(failed > 0 ? 1 : 0);
}

runMigration();
