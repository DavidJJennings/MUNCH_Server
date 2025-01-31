import HttpError from "../classes/HttpError"

function handleDatabaseError(error: Error): HttpError {
  if("code" in error && typeof error.code === "string") {
    throw new HttpError(500, error.code, error.message)
  }
  throw new HttpError(500, error.message)
}

export default handleDatabaseError