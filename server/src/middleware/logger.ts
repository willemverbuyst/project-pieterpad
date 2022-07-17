import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/log';

export const requestLogger =
  (message: string) => (_req: Request, _res: Response, next: NextFunction) => {
    logger.info(message);
    next();
  };
