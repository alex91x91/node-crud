import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const start = async () => {
  console.log('Starting up........');

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
