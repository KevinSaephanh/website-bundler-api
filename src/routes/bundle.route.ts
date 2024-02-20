import { BundleController } from '@controllers/bundle.controller';
import { asyncWrap } from '@middleware/async-wrap.middleware';
import { Router } from 'express';

const bundleController = new BundleController();
const router = Router({ mergeParams: true });

router.post('', asyncWrap(bundleController.create));
router.get('', asyncWrap(bundleController.getUserBundles));
router.get(':id', asyncWrap(bundleController.getById));
router.patch(':id', asyncWrap(bundleController.update));
router.delete(':id', asyncWrap(bundleController.delete));

export default router;
