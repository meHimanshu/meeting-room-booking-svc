import * as mongoose from "mongoose";
import { Nullable } from "../../libs/Nullable";
import VersioningRepository from "../versionable/VersioningRepository";
import { IQueryCreate, IQueryGet, IQueryList } from "./entities";
import IUserModel from "./IUserModel";
import { userModel } from "./userModel";

export default class UserRepository extends VersioningRepository<
  IUserModel,
  mongoose.Model<IUserModel>
> {
  constructor() {
    super(userModel);
  }

  public async list(options: IQueryList): Promise<IUserModel[]> {
    return super.getAll({}, options);
  }

  public async get(query: IQueryGet): Promise<Nullable<IUserModel>> {
    const projection = {
      _id: 0,
      createAt: 0,
      __v: 0
    };
    return super.getByQuery(query, projection);
  }

  public async create(options: IQueryCreate): Promise<IUserModel> {
    return super.create(options);
  }
}
