import UserRepository from "../repositories/user/UserRepository";
import { UnauthorizedError, ForbiddenError } from "../entities/errors";

var jwt = require("jsonwebtoken");

export default class AuthManager {
  private static instance: AuthManager;
  private static privateKey = "secretKey";
  constructor() {}

  static getInstance() {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }
  public createToken(payload: any) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
        AuthManager.privateKey,
        (err: any, token: any) => {
          if (err) {
            reject(err);
          }
          resolve(token);
        }
      );
    });
  }

  public async auth(req: any, res: any, next: any) {
    try {
      const token = req.headers["authorization"];
      const decoded = jwt.verify(token, AuthManager.privateKey);
      const { id } = decoded;
      const userRepository = new UserRepository();

      const user: any = await userRepository.get({ originalId: id });
      if (!user) {
        next(new UnauthorizedError());
      }

      res.locals.userId = user.originalId;
      res.locals.email = user.email;

      next();
    } catch (err) {
      console.log(err.message);

      next(
        new ForbiddenError({
          location: "headers",
          msg: err.message,
          param: "authorization",
          value: ""
        })
      );
    }
  }
}
