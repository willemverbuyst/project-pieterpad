import { Request, Response, NextFunction } from 'express'
import { Stage } from '../integration/database/models/stageModel'

export const getPieterpadController = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const stages = await Stage.find()
  try {
    res.status(200).send({
      message: 'data for pieterpad',
      data: stages,
      status: 'succes',
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
    })
  }
}
