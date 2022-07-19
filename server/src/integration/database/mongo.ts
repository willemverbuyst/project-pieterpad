import mongoose from 'mongoose'
import { logger } from '../../config/log'

const DB_CONNECTION_STRING = `mongodb://mongodb:27017/testdb`

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
