-- ============================================================
-- JMC Kitui – Full Database Schema
-- Last updated: 2026-03-11
-- ============================================================

-- ----------------------------------------------------------------
-- 1. CONTACT MESSAGES (already exists – keep compatible)
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_messages (
    message_id  INT AUTO_INCREMENT PRIMARY KEY,
    full_name   VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    phone       VARCHAR(20),
    message     LONGTEXT NOT NULL,
    status      ENUM('New','Read','Replied') DEFAULT 'New',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_submitted_at (submitted_at)
);

-- ----------------------------------------------------------------
-- 2. USERS / ADMINS
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    user_id       INT AUTO_INCREMENT PRIMARY KEY,
    username      VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email         VARCHAR(150),
    role          ENUM('Admin','Moderator','Editor') DEFAULT 'Editor',
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------
-- 3. MEMBERS
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS members (
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
);

-- ----------------------------------------------------------------
-- 4. MINISTRIES
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS ministries (
    ministry_id INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(150) NOT NULL,
    description TEXT,
    leader_id   INT,
    CONSTRAINT fk_ministry_leader
        FOREIGN KEY (leader_id) REFERENCES members(member_id)
        ON DELETE SET NULL
);

-- ----------------------------------------------------------------
-- 5. EVENTS (already exists – keep compatible with existing code)
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS events (
    event_id    INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    event_date  DATE NOT NULL,
    location    VARCHAR(255),
    description TEXT,
    image_url   VARCHAR(500),
    created_by  INT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_event_creator
        FOREIGN KEY (created_by) REFERENCES users(user_id)
        ON DELETE SET NULL,
    INDEX idx_event_date (event_date)
);

-- ----------------------------------------------------------------
-- 6. DEVOTIONS (already exists – keep compatible with existing code)
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS devotions (
    devotion_id INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    scripture   VARCHAR(255),
    content     LONGTEXT NOT NULL,
    image_url   VARCHAR(500),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at)
);

-- ----------------------------------------------------------------
-- 7. SERMONS (already exists – keep compatible with existing code)
--    NOTE: uses `speaker` (text) and `video_url` to match live routes
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS sermons (
    sermon_id  INT AUTO_INCREMENT PRIMARY KEY,
    title      VARCHAR(255) NOT NULL,
    speaker    VARCHAR(255) NOT NULL,
    video_url  VARCHAR(500),
    audio_path VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_speaker (speaker),
    INDEX idx_created_at (created_at)
);

-- ----------------------------------------------------------------
-- 8. LEADERSHIP (already exists – keep compatible with existing code)
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS leadership (
    leader_id  INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    position   VARCHAR(255) NOT NULL,
    bio        LONGTEXT,
    image_url  VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_position (position)
);

-- ----------------------------------------------------------------
-- 9. CONTRIBUTIONS
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contributions (
    contribution_id   INT AUTO_INCREMENT PRIMARY KEY,
    member_id         INT NULL,
    amount            DECIMAL(10,2) NOT NULL,
    contribution_type ENUM(
        'Tithe','Offering','Thanksgiving','Seed','Pledge','Other'
    ) NOT NULL,
    service_type      ENUM(
        'Sunday Service','Midweek Service','Youth Service','Special Event','Online'
    ),
    payment_method    ENUM(
        'Cash','Bank Transfer','Mobile Money','Online'
    ) NOT NULL,
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
);

-- ----------------------------------------------------------------
-- 10. DONATIONS
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS donations (
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
);

-- ----------------------------------------------------------------
-- 11. MEDIA
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS media (
    media_id     INT AUTO_INCREMENT PRIMARY KEY,
    title        VARCHAR(200),
    description  TEXT,
    file_path    VARCHAR(255) NOT NULL,
    upload_date  DATETIME DEFAULT CURRENT_TIMESTAMP,
    uploaded_by  INT,
    CONSTRAINT fk_media_uploader
        FOREIGN KEY (uploaded_by) REFERENCES users(user_id)
        ON DELETE SET NULL
);

-- ----------------------------------------------------------------
-- 12. TESTIMONIALS
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS testimonials (
    testimonial_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id      INT,
    content        TEXT NOT NULL,
    date           DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_testimonial_member
        FOREIGN KEY (member_id) REFERENCES members(member_id)
        ON DELETE CASCADE
);

-- ----------------------------------------------------------------
-- 13. PRAYER REQUESTS
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS prayer_requests (
    prayer_id      INT AUTO_INCREMENT PRIMARY KEY,
    member_id      INT,
    content        TEXT NOT NULL,
    date_submitted DATETIME DEFAULT CURRENT_TIMESTAMP,
    status         ENUM('Pending','Answered','Private') DEFAULT 'Pending',
    CONSTRAINT fk_prayer_member
        FOREIGN KEY (member_id) REFERENCES members(member_id)
        ON DELETE CASCADE
);

-- ----------------------------------------------------------------
-- 14. LINKS / SOCIAL MEDIA
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS links (
    link_id INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(100),
    url     VARCHAR(255) NOT NULL,
    type    ENUM('Facebook','WhatsApp','Instagram','Other') DEFAULT 'Other'
);

-- ----------------------------------------------------------------
-- DEFAULT ADMIN USER
-- password: changeme123  (bcrypt hash below)
-- Run UPDATE after INSERT if you need to change it.
-- ----------------------------------------------------------------
INSERT IGNORE INTO users (username, email, password_hash, role)
VALUES (
    'admin',
    'admin@jmc.com',
    '$2b$10$RPBpJYXElvWn8BwUjO6njene0x7hI4eJCftrhuOtzL2rryFhxo71.',
    'Admin'
);
