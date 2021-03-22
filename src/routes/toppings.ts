import { Router } from 'express';
import { getToppings } from '../controllers/toppings';

const router = Router();

router.get('/', getToppings);

export default router;
