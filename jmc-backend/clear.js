import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '8877',
    database: process.env.DB_NAME || 'jesus_manifestation_church'
});

db.connect((err) => {
    if (err) throw err;
    db.query('TRUNCATE TABLE sermons', (err, result) => {
        if (err) throw err;
        console.log('Deleted sermons');
        process.exit(0);
    });
});
