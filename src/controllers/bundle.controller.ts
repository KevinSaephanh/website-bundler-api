import { BundleService } from '@services/bundle.service';
import { Request, Response } from 'express';

export class BundleController {
  private readonly bundleService = new BundleService();

  async create(req: Request, res: Response) {
    const bundle = await this.bundleService.create(req.params.userId, req.body);
    res.status(201).send({ bundle });
  }

  async findUserBundles(req: Request, res: Response) {
    const bundles = await this.bundleService.findUserBundles(req.params.userId);
    res.status(200).send({ bundles });
  }

  async findById(req: Request, res: Response) {
    const bundle = await this.bundleService.findById(req.params.id);
    res.status(200).send({ bundle });
  }

  async update(req: Request, res: Response) {
    const bundle = await this.bundleService.update(req.params.id, req.body);
    res.status(200).send({ bundle });
  }

  async delete(req: Request, res: Response) {
    await this.bundleService.delete(req.params.id);
    res.status(204).send({ message: 'Bundle deleted successfully' });
  }
}
