// import mongoose from 'mongoose';
// import DB_NAME from '../constant.js';
// import dotenv from 'dotenv'


// dotenv.config({
//     path:'./env'
// })

// async function ConnectDB(){
//     try{
//         const connectionInstance = await mongoose.connect('mongodb://localhost:27017/MyUserDb');
//         // const connectionInstance = await mongoose.connect(`mongodb+srv://User_siddhant:asdfghjkl@cluster0.rkafu.mongodb.net/TodoList`)
//         console.log(`MONGODB Connected on Host ${connectionInstance.connection.host}`);
//     }
//     catch(error){
//         console.log(`MongoDB Connection Failed | ${error}`);
//     }
// }

// export {ConnectDB};

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