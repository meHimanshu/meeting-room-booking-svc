import { Request, Response, NextFunction } from "express";
import { SuccessResponse } from "../entities/responses";
export default (controller: any, funcName: string) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body, params, query, headers } = req;
    const { locals } = res;
    const result = await controller[funcName]({
      body,
      params,
      query,
      headers,
      locals
    });
    const response = new SuccessResponse(result);
    res.json(response);
  } catch (err) {
    next(err);
  }
};
