import { Schema } from "mongoose";

export default class VersionableSchema extends Schema {
  constructor(options: any, collections: any) {
    const versionedOptions = Object.assign(
      {
        createdAt: {
          type: Date,
          default: Date.now,
          required: true
        },
        deletedAt: {
          type: Date
        },
        originalId: {
          type: String,
          required: true
        }
      },
      options
    );

    super(versionedOptions, collections);
  }
}
