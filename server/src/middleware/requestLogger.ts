import { Request, Response, NextFunction } from 'express'
import { logger } from '../config/log'

export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info(`request on ${req.originalUrl}`)
  next()
}
