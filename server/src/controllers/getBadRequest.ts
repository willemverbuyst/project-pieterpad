import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/log';

export const getBadRequestController = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    logger.info('bad request');
    res.status(404).send({ message: 'Oops 404, page not found' });
  } catch (error) {
    logger.error(error);
    res.status(500).send({ message: 'something went wrong' });
  }
};
