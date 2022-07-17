import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/log';
import pieterpadData from '../../../data/pieterpad.json';

export const getPieterpadController = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    logger.info('request for pieterpad data');
    res.status(200).send({
      message: 'data for pieterpad',
      data: pieterpadData,
      status: 'succes',
    });
  } catch (error) {
    logger.error(error);
    res.status(500).send({ message: 'something went wrong' });
  }
};
