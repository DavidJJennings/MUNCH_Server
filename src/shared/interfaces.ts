import { Request, Response } from "express";

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export interface TypedResponseBody<T> extends Response {
  json: (body: T) => this;
}