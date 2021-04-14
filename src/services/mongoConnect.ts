import mongoose from 'mongoose';

export const connectToMongoose = async () => {
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
