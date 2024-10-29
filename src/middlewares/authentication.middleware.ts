import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import CONFIG from 'src/configs/config';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const headers = req.headers.authorization;

    if (!headers || !headers.startsWith('Bearer')) {
      return res.sendStatus(401);
    }

    const token = headers.split(' ')[1];

    jwt.verify(
      token,
      CONFIG.SECRET_SAUCE,
      (error: jwt.VerifyErrors, user: string | jwt.JwtPayload) => {
        if (error) {
          return res.sendStatus(401);
        }

        res.locals.user = user;
        next();
      },
    );
  }
}
