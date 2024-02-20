import { HttpException } from '@exceptions/http.exception';
import Bundle from '@models/bundle.model';

interface BundleDto {
  title: string;
  websites: string[];
}

export class BundleService {
  async create(userId: string, data: BundleDto) {
    const bundles = await this.getUserBundles(userId);
    if (bundles.length >= 10) {
      throw new HttpException(409, 'User cannot create more than 10 bundles');
    }
    return Bundle.create({ ...data });
  }

  async getUserBundles(userId: string) {
    return Bundle.find({ userId });
  }

  async getById(id: string) {
    const bundle = await Bundle.findById(id);
    if (!bundle) {
      throw new HttpException(404, `Bundle with id: ${id} not found`);
    }
    return bundle;
  }

  async update(id: string, data: Partial<BundleDto>) {
    const updatedBundle = await Bundle.findByIdAndUpdate(id, { ...data });
    if (!updatedBundle) {
      throw new HttpException(409, `Bundle with id: ${id} not found`);
    }
    return updatedBundle;
  }

  async delete(id: string) {
    const deletedBundle = await Bundle.findByIdAndDelete(id);
    if (!deletedBundle) {
      throw new HttpException(404, `Bundle with id: ${id} not found`);
    }
  }
}
