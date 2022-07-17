import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/log';

export const getInfoController = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.info('request for info');
  res.status(200).send({ message: 'hello from the server' });
};
