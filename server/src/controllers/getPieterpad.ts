import { Request, Response, NextFunction } from 'express'
import { Stage } from '../integration/database/models/stageModel'

export const getPieterpadController = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const stages = await Stage.find()
    res.status(200).send({
      message: 'data for pieterpad',
      data: stages,
      results: stages.length,
      status: 'succes',
    })
  } catch (error) {
    res.status(500).send({
      status: 'fail',
      message: 'something went wrong',
    })
  }
}
