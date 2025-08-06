// config/db.config.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

let db; // scoped outside for later access

export const connectDB = async () => {
  try {
    db = await mysql.createConnection({
      host:process.env.HOST,
      user:process.env.USER,
      password:process.env.PASSWORD,
      database:process.env.DB_NAME,
    });
    console.log('✅ DB connected');
  } catch (error) {
    console.error('❌ DB connection failed:', error.message);
  }
};

export const getDB = () => {
  return db;
};
