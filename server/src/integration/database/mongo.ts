import mongoose from 'mongoose'
import { logger } from '../../config/log'
import { Stage } from './models/stageModel'

const MONGO_IP = 'mongo'
const MONGO_PORT = 27017
const MONGO_USER = process.env.MONGO_USER || 'myusername'
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'mypassword'

const DB_CONNECTION_STRING = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

export const connectWithRetry = () => {
  console.log('DB_CONNECTION_STRING ', DB_CONNECTION_STRING)
  mongoose
    .connect(DB_CONNECTION_STRING)
    .then(() => logger.info('successfully connected to the db'))
    .catch((error) => {
      logger.error(error)
      setTimeout(connectWithRetry, 5000)
    })
}
