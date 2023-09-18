import express from 'express';
import { getCourses } from './course.controler.js';
const router = express.Router();

router.get('/allcourses',getCourses )

export default router;