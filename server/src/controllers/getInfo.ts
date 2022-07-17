import { Request, Response, NextFunction } from 'express'

export const getInfoController = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(200).send({ message: 'hello from the server' })
}
