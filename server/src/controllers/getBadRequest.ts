import { Request, Response, NextFunction } from 'express';

export const getBadRequestController = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(404).send({ message: 'Oops 404, page not found' });
};
