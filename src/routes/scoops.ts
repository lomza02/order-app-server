import { Router } from 'express';
import { getScoops } from '../controllers/scoops';

const router = Router();

router.get('/', getScoops);

export default router;
