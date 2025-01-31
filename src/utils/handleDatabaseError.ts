import HttpError from "../classes/HttpError"

function handleDatabaseError(error: any): never {
  if(error instanceof Error) {
    if("code" in error && typeof error.code === "string") {
      throw new HttpError(500, error.code, error.message)
    }
    throw new HttpError(500, error.message)
  }

  throw new HttpError(500, "Error querying user from database")
}

export default handleDatabaseError