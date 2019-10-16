import { ErrorName } from "../../libs/constant";
import BaseError from "./BaseError";
import IError from "./IError";

class DuplicateError extends BaseError {
  constructor(data: IError) {
    super(data, ErrorName.DuplicateError);
  }
}

export default DuplicateError;
