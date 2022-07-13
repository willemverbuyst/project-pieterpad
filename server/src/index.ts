import express, { Request, Response, NextFunction } from 'express';

const app = express();

const PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
