import { IMetadata } from "./IErrorResponse";
import { StatusCodes } from "../../libs/constant";

class BadRequestErrorResponse {
  public data: any;
  public metadata: IMetadata;
  constructor(data: any = null) {
    this.data = data;
    this.metadata = {
      code: StatusCodes.BAD_REQUEST,
      message: "BadRequestError",
      timestamp: Date.now()
    };
  }
}

export default BadRequestErrorResponse;
