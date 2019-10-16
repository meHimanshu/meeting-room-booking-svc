import * as mongoose from "mongoose";

import IUserModel from "./IUserModel";
import UserSchema from "./UserSchema";

export const userSchema = new UserSchema({
  collection: "User"
});

/**
 * Indicies
 */
userSchema.index({ originalId: 1, deleteAt: 1 }, { unique: true });

/**
 * @typedef Resource
 */

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
  "User",
  userSchema,
  "Users",
  true
);
