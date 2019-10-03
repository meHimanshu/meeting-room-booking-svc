import { ErrorName } from "../../libs/constant";
import BaseError from "./BaseError";
import IError from "./IError";

class BadRequestError extends BaseError {
  constructor(data: IError) {
    super(data, ErrorName.BadRequestError);
  }
}

export default BadRequestError;
