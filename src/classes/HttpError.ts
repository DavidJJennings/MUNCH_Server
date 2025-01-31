import { HttpErrorCodes } from "../enums/ErrorCodes";

class HttpError extends Error {
  public sqlCode?: string;
  public code: number;
  
  constructor(code: number, sqlCode?: string, message?: string) {
    super(message ?? HttpErrorCodes[code]);

    this.code = code;
    this.sqlCode = sqlCode;

    Object.setPrototypeOf(this, HttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export default HttpError;