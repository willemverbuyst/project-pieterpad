import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PORT } from './config/constants';
import { logger } from './config/log';
import { morganMiddleware } from './config/morgan';
import path from 'path';

const app = express();

app.use(cors());
app.use(morganMiddleware);
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).sendFile(`${__dirname}/public/index.js`);
});

app.listen(PORT, () => {
  logger.info(`${process.env.NODE_ENV || 'developement'} environment`);
  logger.info(`listening on port ${PORT}`);
});
