import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../config/database";
import { TypedRequestBody } from "../shared/interfaces";
import HttpError from "../classes/HttpError";
import handleDatabaseError from "../utils/handleDatabaseError";

interface IRegisterReq {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export const addUserToDatabase = async ({firstName, lastName, email, password}: IRegisterReq) => {
  try {
    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, password]
    )
    return result.insertId;
  } catch(error) {
    handleDatabaseError(error)
  }
}

export const doesUserExist = async (email: string) => {
  try {
    console.log("BOFF")
    const [results] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    return results.length > 0;
  } catch(error) {
    handleDatabaseError(error);
  }
}