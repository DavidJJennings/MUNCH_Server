import { RowDataPacket } from "mysql2";
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


// export const addUserToDatabase = ({firstName, lastName, email, password}: IRegisterReq): Promise<number> => {
//   Gunna add in after check service created
// }

export const doesUserExist = async (email: string) => {
  try {
    console.log("BOFF")
    const [results] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    return results.length > 0;
  } catch(error) {
    if (error instanceof Error) {
      handleDatabaseError(error);
    }
    throw new HttpError(500, "Error querying user from database")
  }
}