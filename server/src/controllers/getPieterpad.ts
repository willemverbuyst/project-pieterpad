import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/log';
import pieterpadData from '../../../data/pieterpad.json';

export const getPieterpadController = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.info('request for pieterpad data');
  res.status(200).send({
    message: 'data for pieterpad',
    data: pieterpadData,
    status: 'succes',
  });
};
