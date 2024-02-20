import { Router } from 'express';
import authRoutes from './auth.route';
import bundleRoutes from './bundle.route';

const router = Router({ mergeParams: true });

router.use('/auth', authRoutes);
router.use('/users/:userId/bundles', bundleRoutes);

export default router;
