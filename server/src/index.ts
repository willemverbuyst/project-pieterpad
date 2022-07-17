import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PORT } from './config/constants';
import { logger } from './config/log';
import { morganMiddleware } from './config/morgan';
import { router } from './controllers/routes';

const app = express();

app.use(cors());
app.use(morganMiddleware);
app.use(express.static(`${__dirname}/public`));

app.use(express.static(`${__dirname}/public/`));
app.use('/v1', router);

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(PORT, () => {
  logger.info(`${process.env.NODE_ENV || 'developement'} environment`);
  logger.info(`listening on port ${PORT}`);
});
