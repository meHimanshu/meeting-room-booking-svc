import { StatusCodes } from "../../libs/constant";
export default class SuccessResponse {
  constructor(
    public data: any = null,
    public metadata: any = {
      code: StatusCodes.OK,
      message: "",
      timestamp: Date.now()
    }
  ) {}
}
