import { createLogger, transports, format } from 'winston';

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  http: 3,
  info: 4,
  debug: 5,
};

export const logger = createLogger({
  levels: logLevels,
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] SERVER ${level}: ${message}`;
    })
  ),
});
