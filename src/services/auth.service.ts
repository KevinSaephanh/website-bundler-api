import { getProfileInfo } from '@utils/google-oauth';
import { UserService } from './user.service';

export class AuthService {
  private readonly userService = new UserService();

  async login(token: string) {
    const { sub, email, name } = await getProfileInfo(token);
    let user = await this.userService.findById(sub);
    if (!user) {
      user = await this.userService.createUser({
        googleId: sub,
        email: email!,
        name: name!,
      });
    }
    return user;
  }
}
