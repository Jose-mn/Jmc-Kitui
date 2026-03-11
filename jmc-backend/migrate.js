import pool from "./config/db.js";

async function migrate() {
    try {
        console.log("Running migrations...");
        await pool.query("ALTER TABLE devotions ADD COLUMN image_url VARCHAR(500);");
        console.log("Added image_url to devotions.");
    } catch (err) {
        if (err.code === 'ER_DUP_FIELDNAME') console.log("image_url already exists in devotions.");
        else console.error(err);
    }

    try {
        await pool.query("ALTER TABLE events ADD COLUMN image_url VARCHAR(500);");
        console.log("Added image_url to events.");
    } catch (err) {
        if (err.code === 'ER_DUP_FIELDNAME') console.log("image_url already exists in events.");
        else console.error(err);
    }

    try {
        await pool.query("ALTER TABLE leadership ADD COLUMN image_url VARCHAR(500);");
        console.log("Added image_url to leadership.");
    } catch (err) {
        if (err.code === 'ER_DUP_FIELDNAME') console.log("image_url already exists in leadership.");
        else console.error(err);
    }

    console.log("Migrations complete.");
    process.exit(0);
}

migrate();
