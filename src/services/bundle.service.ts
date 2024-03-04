import { HttpException } from '@exceptions/http.exception';
import Bundle from '@models/bundle.model';
import { UserService } from './user.service';

export interface BundleDto {
  title: string;
  websites: string[];
}

export class BundleService {
  private readonly userService = new UserService();

  async create(userId: string, data: BundleDto) {
    const user = await this.userService.findById(userId);
    // if (user.bundles?.length >= 15) {
    //   throw new HttpException(409, 'User cannot create more than 15 bundles');
    // }
    return Bundle.create({ ...data, user });
  }

  async findUserBundles(userId: string) {
    return Bundle.find({ user: { googleId: userId } });
  }

  async findById(id: string) {
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
    Bundle.deleteOne({ id });
  }
}
