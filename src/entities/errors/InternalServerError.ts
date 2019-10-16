import { ErrorName } from "../../libs/constant";
import BaseError from "./BaseError";
import IError from "./IError";

class InternalServerError extends BaseError {
  constructor(data: IError) {
    super(data, ErrorName.InternalServerError);
  }
}

export default InternalServerError;
