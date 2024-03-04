import { HttpException } from '@exceptions/http.exception';
import User from '@models/user.model';

export interface UserDto {
  googleId: string;
  email: string;
  name: string;
}

export class UserService {
  async createUser({ googleId, email, name }: UserDto) {
    return User.create({ googleId, email, name });
  }

  async findById(googleId: string) {
    const user = await User.findById(googleId);
    if (!user) {
      throw new HttpException(404, `No user with id: ${googleId} found`);
    }
    return user;
  }
}
