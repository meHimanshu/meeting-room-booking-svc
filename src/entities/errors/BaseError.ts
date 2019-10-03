import IError from "./IError";

class BaseError {
  constructor(public data: IError, public type: any) {}
}

export default BaseError;
