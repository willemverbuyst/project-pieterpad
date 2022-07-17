import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/log';

export const getInfoController = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    logger.info('request on /info');
    res.status(200).send({ message: 'hello from the server' });
  } catch (error) {
    logger.error(error);
    res.status(500).send({ message: 'something went wrong' });
  }
};
