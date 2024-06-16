import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'MERN_STACK_EVENT_MANAGE',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database');
  } catch (err) {
    console.error('Error occurred while connecting to the database:', err);
  }
};
