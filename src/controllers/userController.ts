
import {NextFunction } from 'express';
import { TypedRequestBody, TypedResponseBody } from '../shared/interfaces';
import { logger } from '../utils/logger';
import bcrypt from "bcrypt";
import { addUserToDatabase } from '../services/userService';

interface IRegisterReq {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

interface IRegisterRes {
  id: string,
  message: string,
}


export const registerUser = async (req: TypedRequestBody<IRegisterReq>, res: TypedResponseBody<IRegisterRes>, next: NextFunction) => {
  const { firstName, lastName, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 16);
    const userId = await addUserToDatabase({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      id: userId,
      message: "User successfully registered."
    })
    logger.info("Successfully registered user: %s", email)
    
  } catch(error) {
    logger.error("Error during user registration: %s", error.message)
    
  }




}