import { Router } from 'express';
import { createDoctor, getDoctors } from '../controllers/doctor';

const router = Router();

router.post('/', createDoctor);
router.get('/', getDoctors);

export default router;
