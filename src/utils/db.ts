import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

export default async function connectToDatabase() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log('🚀 Successfully connected to database');
    } else {
      console.log('🔴 Failed to connect to database');
    }
  } catch (err) {
    throw new Error('Database connection error');
  }
}
