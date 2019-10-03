import { ErrorName } from "../../libs/constant";
import BaseError from "./BaseError";

class UnauthorizedError extends BaseError {
  constructor(data: any = null) {
    super(data, ErrorName.UnauthorizedError);
  }
}

export default UnauthorizedError;
