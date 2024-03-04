import { BundleController } from '@controllers/bundle.controller';
import { asyncWrap } from '@middleware/async-wrap.middleware';
import { Router } from 'express';

const bundleController = new BundleController();
const router = Router({ mergeParams: true });

router.post('', asyncWrap(bundleController.create));
router.get('', asyncWrap(bundleController.findUserBundles));
router.get(':id', asyncWrap(bundleController.findById));
router.patch(':id', asyncWrap(bundleController.update));
router.delete(':id', asyncWrap(bundleController.delete));

export default router;
