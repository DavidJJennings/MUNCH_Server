import pool from "../config/database";
import { TypedRequestBody } from "../shared/interfaces";

interface IRegisterReq {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}


// export const addUserToDatabase = ({firstName, lastName, email, password}: IRegisterReq): Promise<number> => {
  // Gunna add in after check service created
// }

// export const doesUserExist = async (email: string) => {
//   [user] = pool.query
// }