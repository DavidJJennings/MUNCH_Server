
import { NextFunction } from 'express';
import { TypedRequestBody, TypedResponseBody } from '../shared/interfaces';
import bcrypt from "bcrypt";
import { addUserToDatabase, doesUserExist } from '../services/userService';
import pool from '../config/database';


interface IRegisterReq {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

interface IRegisterRes {
  id: number,
  message: string,
}


export const registerUser = async (req: TypedRequestBody<IRegisterReq>, res: TypedResponseBody<IRegisterRes>, next: NextFunction) => {
  const { firstName, lastName, password, email } = req.body;

  try {


async function testDB() {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("MySQL Connection Successful:", rows);
  } catch (error) {
    console.error("MySQL Connection Failed:", error);
  }
}

testDB();
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const userId = await addUserToDatabase({
    //   firstName,
    //   lastName,
    //   email,
    //   password: hashedPassword,
    // });

    // res.status(201).location(`/user/${userId}`).json({
    //   id: userId,
    //   message: "User successfully registered."
    // });

    // logger.info("Successfully registered user: %s", email);
    
  } catch(error) {
    next(error);
  }
}