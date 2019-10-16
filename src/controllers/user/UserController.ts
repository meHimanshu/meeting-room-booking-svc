import { ICreate } from "./entities";
import UserRepository from "../../repositories/user/UserRepository";
import {
  DuplicateError,
  UnauthorizedError,
  BadRequestError
} from "../../entities/errors";
import { generateHashPassword, verifyHashPassword } from "./helper";
import AuthManager from "../../middlewares/AuthManager";

class UserController {
  private userRepository: UserRepository;
  private authManager: AuthManager;

  constructor() {
    this.userRepository = new UserRepository();
    this.authManager = AuthManager.getInstance();
  }

  public async login({ body }: { body: any }) {
    const { email, password } = body;
    const user = await this.userRepository.get({ email });
    if (!user) {
      throw new UnauthorizedError();
    }
    const hashPassword = user.password;
    const isValidPassword = await verifyHashPassword(password, hashPassword);
    if (!isValidPassword) {
      throw new BadRequestError({
        location: "password",
        msg: "Password is wrong",
        param: "password",
        value: password
      });
    }
    const {
      email: userEmail,
      originalId: id,
      phoneNumber,
      role,
      username,
      name
    } = user;
    const payload = {
      email: userEmail,
      role,
      id,
      phoneNumber,
      username,
      name
    };

    return this.authManager.createToken(payload);
  }

  public async create({ body }: { body: ICreate }) {
    try {
      const { role, email, name, password, phoneNumber, username } = body;
      const isEmailExist = await this.userRepository.get({ email });

      if (isEmailExist) {
        throw new DuplicateError({
          location: "email",
          msg: "Duplicate email is not allowed",
          param: "email",
          value: email
        });
      }
      const hashPassword = await generateHashPassword(password);
      const data = {
        password: hashPassword,
        role,
        email,
        name,
        phoneNumber,
        username
      };

      return this.userRepository.create(data);
    } catch (err) {
      throw err;
    }
  }

  public async getMeDetail({ locals }: { locals: any }) {
    const { userId } = locals;
    return this.userRepository.getById(userId);
  }
}

export default new UserController();
