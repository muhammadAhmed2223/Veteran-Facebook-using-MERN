import express from 'express';
import { login,signup, getAll } from '../controllers/veteran.js';

const router = express.Router();

router.get('/', getAll);
router.post('/', signup);

export default router;