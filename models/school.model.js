// models/school.model.js
import { getDB } from '../config/db.config.js';

export const addSchool = async (schoolData) => {
  const { name, address, latitude, longitude } = schoolData;
  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  const db = getDB();
  return db.query(sql, [name, address, latitude, longitude]);
};

export const getAllSchools = async () => {
  const db = getDB();
  return db.query('SELECT * FROM schools');
};
