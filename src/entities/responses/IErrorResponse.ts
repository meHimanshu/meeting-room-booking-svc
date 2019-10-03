export interface IMetadata {
  message: string;
  timestamp: number;
  code: number;
}

export interface IErrorResponse {
  data: any;
  metadata: IMetadata;
}
