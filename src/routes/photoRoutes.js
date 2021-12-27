import { Router } from 'express';

import photoController from '../controllers/PhotoController';

const router = Router();

router.post('/', photoController.store);

export default router;
