import { ErrorName } from "../../libs/constant";
import BaseError from "./BaseError";

class ForbiddenError extends BaseError {
  constructor(data: any = null) {
    super(data, ErrorName.ForbiddenError);
  }
}

export default ForbiddenError;
