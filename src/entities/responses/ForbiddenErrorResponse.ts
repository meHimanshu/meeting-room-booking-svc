import { IMetadata } from "./IErrorResponse";
import { StatusCodes } from "../../libs/constant";

class ForbiddenErrorResponse {
  public data: any;
  public metadata: IMetadata;
  constructor(data: any = null) {
    this.data = data;
    this.metadata = {
      code: StatusCodes.FORBIDDEN,
      message: "ForbiddenError",
      timestamp: Date.now()
    };
  }
}

export default ForbiddenErrorResponse;
