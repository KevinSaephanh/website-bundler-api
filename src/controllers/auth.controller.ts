import { AuthService } from '@services/auth.service';
import { Request, Response } from 'express';

export class AuthController {
  private readonly authService = new AuthService();

  async login(req: Request, res: Response) {
    const user = await this.authService.login(req.body);
    res.status(200).send({ user });
  }
}
