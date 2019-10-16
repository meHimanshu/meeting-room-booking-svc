import { Document, Model, Query, DocumentQuery } from "mongoose";
import * as mongoose from "mongoose";

import {
  IQueryBaseGet,
  IQueryBaseCreate,
  IQueryBaseDelete,
  IQueryBaseList
} from "./entities";

export default abstract class BaseRepository<
  D extends Document,
  M extends Model<D>
> {
  protected modelType: M;
  constructor(modelType: M) {
    this.modelType = modelType;
  }

  /**
   * Create
   * @property {string} body.name - The name of record.
   * @returns {D}
   */
  public async create(options: IQueryBaseCreate): Promise<D> {
    const model = new this.modelType({
      ...options
    });

    return model.save();
  }

  /**
   * Insert Many
   * @returns {Documents[]}
   */
  public async insertMany(
    docs: IQueryBaseCreate[],
    options?: any | null
  ): Promise<D[]> {
    return this.modelType.insertMany(docs, options);
  }

  public count(conditions: any = {}): Query<number> {
    return this.modelType.count(conditions);
  }

  protected async getAll(
    conditions: any,
    projection?: any | null,
    options?: any | null,
    populate?: any | null
  ): Promise<D[]> {
    return populate
      ? await this.modelType
          .find(conditions, projection, options)
          .populate(populate)
      : await this.modelType.find(conditions, projection, options);
  }

  protected findOne(
    conditions: any,
    projection: any = {},
    populate?: any | null
  ): DocumentQuery<D | null, D> {
    return populate
      ? this.modelType.findOne(conditions, projection).populate(populate)
      : this.modelType.findOne(conditions, projection);
  }
}
