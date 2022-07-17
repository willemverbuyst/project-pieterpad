import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/log';

export const getBadRequestController = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.info('bad request');
  res.status(404).send({ message: 'Oops 404, page not found' });
};
