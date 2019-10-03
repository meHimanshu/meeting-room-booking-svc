import { IMetadata } from "./IErrorResponse";
import { StatusCodes } from "../../libs/constant";

class InternalServerResponse {
  public data: any;
  public metadata: IMetadata;
  constructor(data: any = null) {
    this.data = data;
    this.metadata = {
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "InternalServerError",
      timestamp: Date.now()
    };
  }
}

export default InternalServerResponse;
