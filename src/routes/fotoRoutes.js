import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = Router();

router.post('/', loginRequired, fotoController.store);

export default router;
