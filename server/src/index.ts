import express, { Request, Response, NextFunction } from 'express';
import { logger } from './log';

const app = express();

const PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT, () => {
  logger.info(`Listening on port: ${PORT}`);
});
