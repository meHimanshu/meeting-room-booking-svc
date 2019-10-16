import { IMetadata } from "./IErrorResponse";
import { StatusCodes } from "../../libs/constant";

class UnauthorizedErrorResponse {
  public data: any;
  public metadata: IMetadata;
  constructor(data: any = null) {
    this.data = null;
    this.metadata = {
      code: StatusCodes.UNAUTHORIZED,
      message: "UNAUTHORIZED",
      timestamp: Date.now()
    };
  }
}

export default UnauthorizedErrorResponse;
