import { IMetadata } from "./IErrorResponse";
import { StatusCodes } from "../../libs/constant";

class DuplicateErrorResponse {
  public data: any;
  public metadata: IMetadata;
  constructor(data: any = null) {
    this.data = data;
    this.metadata = {
      code: StatusCodes.CONFLICT,
      message: "DuplicateError",
      timestamp: Date.now()
    };
  }
}

export default DuplicateErrorResponse;
