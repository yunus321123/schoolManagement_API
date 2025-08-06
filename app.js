// app.js
import express from 'express';
import schoolRoutes from './routes/school.route.js';


const app = express();

app.use(express.json());

// Routes
app.use('/api/schools', schoolRoutes);

export default app;
