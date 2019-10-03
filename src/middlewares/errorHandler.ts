import {
  DuplicateError,
  UnauthorizedError,
  BadRequestError,
  InternalServerError,
  ForbiddenError
} from "../entities/errors";
import {
  DuplicateErrorResponse,
  UnauthorizedErrorResponse,
  BadRequestErrorResponse,
  InternalServerResponse,
  ForbiddenErrorResponse
} from "../entities/responses";
import { IErrorResponse } from "../entities/responses/IErrorResponse";

const errorHandler = (err: any, req: any, res: any, next: any) => {
  let response: IErrorResponse;

  switch (err.type) {
    case DuplicateError.name:
      response = new DuplicateErrorResponse(err.data);
      break;
    case UnauthorizedError.name:
      response = new UnauthorizedErrorResponse(err.data);
      break;
    case BadRequestError.name:
      response = new BadRequestErrorResponse(err.data);
      break;
    case InternalServerError.name:
      response = new InternalServerResponse(err.data);
      break;
    case ForbiddenError.name:
      response = new ForbiddenErrorResponse(err.data);
      break;
    default:
      response = new InternalServerResponse(err.data);
  }
  res.status(response.metadata.code).json(response);
};

export default errorHandler;
