import morgan, { StreamOptions } from 'morgan';
import { logger } from './log';

const stream: StreamOptions = {
  write: (message) => logger.info(message),
};

const skip = (): boolean => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

export const morganMiddleware = morgan(
  ':method :url :status :response-time ms',
  { stream, skip }
);
