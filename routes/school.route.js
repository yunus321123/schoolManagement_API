import express from 'express';
import { createSchool, listSchools } from '../controller/school.controller.js';

const router = express.Router();

router.post('/addSchool', createSchool);
router.get('/listSchools', listSchools);

export default router;
