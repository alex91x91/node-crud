import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@sgtickets/common';

import { imageUpload } from './routes';

const app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== 'test',
    secure: false
  })
);

app.use(imageUpload);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app as default };
