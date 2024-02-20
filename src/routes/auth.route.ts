import { AuthController } from '@controllers/auth.controller';
import { asyncWrap } from '@middleware/async-wrap.middleware';
import { Router } from 'express';

const authController = new AuthController();
const router = Router();

router.get('/login', asyncWrap(authController.login));

export default router;
