// index.js
import dotenv from 'dotenv';
import app from './app.js';
import {getDB,connectDB} from './config/db.config.js';  
 await connectDB()

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
