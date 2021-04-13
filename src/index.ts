import mongoose from 'mongoose';
import app from './app';
import { sequelize } from './services/sequelize';

const connectToMongoose = async () => {
  try {
    await mongoose.connect('mongodb://localhost:37017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.info('Successfully connected to Mongoose');
  } catch (error) {
    console.info('Connection to Mongoose is failed');
  }
};

const connectToMySQL = async () => {
  try {
    await sequelize.authenticate();

    console.info('Successfully connected to MariaDb');
  } catch (error) {
    console.info(`Connection to MariaDb is failed. Error: ${error}`);
    process.exit(1);
  }
};

const start = async () => {
  console.log('Starting up........');

  await connectToMongoose();
  await connectToMySQL();

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
