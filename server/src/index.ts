import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PORT } from './config/constants';
import { logger } from './config/log';
import { morganMiddleware } from './config/morgan';

const app = express();

app.use(cors());
app.use(morganMiddleware);

app.use(express.static(`${__dirname}/public/`));

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/root', (_req: Request, res: Response, _next: NextFunction) => {
  logger.info('Request on /');
  res.send({ message: 'Hello from the server' });
});

app.get('/pieterpad', (_req: Request, res: Response, _next: NextFunction) => {
  logger.info('Request on /pieterpad');
  res.send({ message: 'Pieterpad' });
});

app.get('*', (_req: Request, res: Response, _next: NextFunction) => {
  logger.warn('Bad request');
  res.send({ message: 'Oops 404, page not found' });
});

app.listen(PORT, () => {
  logger.info(`Listening on port: ${PORT}`);
});
