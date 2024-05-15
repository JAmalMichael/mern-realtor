import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const Port = 3000;

//connection
const connectDb = async () => {
   try {
      const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING)
      console.log(`Connected to ${connect.connection.name}`)
   } catch (error) {
      console.log(error)
   }

}

connectDb();
app.listen(Port, () => {
   console.log(`Server is running at ${Port}`)
})