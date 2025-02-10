
import mongoose from 'mongoose';
import DB_NAME from '../constant.js';
import dotenv from 'dotenv';

dotenv.config({})

const url = process.env.MONGODB_URI;
console.log(url);
const connectMongoDB = async ()=>{
  try {
    const connectionInstance = await mongoose.connect(`${url}/${DB_NAME}` ,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Failed: ", error);
    process.exit(1);
  }
}

export { connectMongoDB };