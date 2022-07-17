import { Request, Response, NextFunction } from 'express';
import pieterpadData from '../../../data/pieterpad.json';

export const getPieterpadController = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(200).send({
    message: 'data for pieterpad',
    data: pieterpadData,
    status: 'succes',
  });
};
