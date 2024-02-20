import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/http.exception';

export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status, message } = error;
    console.error(
      `[${req.method}] Path:: ${req.path} Status:: ${
        status || 500
      }, Message:: ${message}`
    );
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};
