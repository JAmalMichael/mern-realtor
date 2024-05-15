//Test
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'

export  const userTest =  (req, res) => {
    res.json({message: "Just settling in.."})
 }

 export const userSignUp = asyncHandler ( async (req, res, next) => {
   const {username, email, password} = req.body;
   const hashedPassword = bcrypt.hashSync(password, 10)
   const newUser = User({username, email, password: hashedPassword})
   try {     
      await newUser.save();
      res.status(200).json("User created successfully")
      
   } catch (error) {
      next(error);
   }
   
 })
