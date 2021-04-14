import app from './app';
import { connectToMySQL } from './services/sequelize';

const start = async () => {
  console.log('Starting up........');

  await connectToMySQL();

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
