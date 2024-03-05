import { getProfileInfo } from '@utils/google-oauth';

export class AuthService {
  async login(token: string) {
    const { sub, email, name } = await getProfileInfo(token);
    return { googleId: sub, email: email!, name: name! };
  }
}
