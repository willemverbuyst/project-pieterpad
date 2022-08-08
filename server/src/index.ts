import express from 'express'
import cors from 'cors'
import { PORT } from './config/constants'
import { logger } from './config/log'
import { morganMiddleware } from './config/morgan'
import { router } from './controllers/routes'
import { connectWithRetry as connectToMongo } from './integration/database/mongo'

const app = express()

app.use(cors())
app.use(morganMiddleware)

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/v1', router)

app.listen(PORT, () => {
  logger.info(`${process.env.NODE_ENV || 'developement'} environment`)
  logger.info(`listening on port ${PORT}`)
  connectToMongo()
})
