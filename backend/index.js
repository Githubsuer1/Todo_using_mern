import { connectMongoDB } from "./db/connection.db.js";
import app from "./app.js";
import dotenv from  'dotenv';

dotenv.config({})
const port = process.env.PORT || 8000;

connectMongoDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server running on http://Mongodb-atlas:${port}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed",error);
})