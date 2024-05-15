import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRoute.js'
dotenv.config();

const app = express();
const Port = 3000;
app.use(express.json())

//connection
const connectDb = async () => {
   try {
      const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING)
      console.log(`Connected to ${connect.connection.name}`)
   } catch (error) {
      console.log(error)
   }

}

//routers (test router, signup router)
app.use("/api/user", userRouter);

app.use( (err, req, res, next) => {
   let statusCode = 500 || err.statusCode;
   let message = err.message || "Internal server error";
   return res.status(statusCode).json({
      success: flase,
      statusCode,
      message
   })
})

connectDb();
app.listen(Port, () => {
   console.log(`Server is running at ${Port}`)
})