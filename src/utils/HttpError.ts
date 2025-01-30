import { HttpErrorCodes } from "../enums/ErrorCodes";

class HttpError extends Error {
  public status: number;
  
  constructor(status: number, message?: string) {
    super(message ?? HttpErrorCodes[status]);

    this.status = status;

    Object.setPrototypeOf(this, HttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export default HttpError;