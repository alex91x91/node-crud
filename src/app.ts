import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@sgtickets/common';

import { getExchanges } from './routes/getExchanges';
import { getExchangesById } from './routes/getExchangesById';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== 'test',
    secure: false
  })
);

app.use(getExchanges);
app.use(getExchangesById);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app as default };
