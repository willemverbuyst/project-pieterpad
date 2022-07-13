import express, { Request, Response, NextFunction } from 'express';
import { PORT } from './config/constants';
import { logger } from './config/log';

const app = express();

app.listen(PORT, () => {
  logger.info(`Listening on port: ${PORT}`);
});
