import { Router } from 'express';
import { createClinic, getClinics } from '../controllers/clinic';

const router = Router();

router.post('/', createClinic);
router.get('/', getClinics);

export default router;
