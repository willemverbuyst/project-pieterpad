import express, { Request, Response, NextFunction } from 'express';
import { PORT } from './config/constants';
import { logger } from './config/log';

const app = express();

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  logger.info('Request on /');
  res.send({ message: 'Hello from the server' });
});

app.get('/pieterpad', (_req: Request, res: Response, _next: NextFunction) => {
  logger.info('Request on /pieterpad');
  res.send({ message: 'Pieterpad' });
});

app.listen(PORT, () => {
  logger.info(`Listening on port: ${PORT}`);
});
