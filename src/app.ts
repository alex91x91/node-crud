import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@sgtickets/common';

import { createUser } from './routes';
import { updateUser } from './routes';
import { getCurrentUser } from './routes';
import { deleteUser } from './routes';
import { listUsers } from './routes';

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

app.use(createUser);
app.use(updateUser);
app.use(getCurrentUser);
app.use(deleteUser);
app.use(listUsers);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app as default };
