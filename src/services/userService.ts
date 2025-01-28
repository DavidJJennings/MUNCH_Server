import { TypedRequestBody } from "../shared/interfaces";

interface IRegisterReq {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}


export const addUserToDatabase = ({firstName, lastName, email, password}: IRegisterReq): Promise<string> => {
  return (
    
  )
}