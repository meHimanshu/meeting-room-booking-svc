import VersionableSchema from '../versionable/VersionableSchema';
export default class ResourceSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
      name: {
        required: true,
        type: String,
      },
      username: {
        required: true,
        type: String,
      },
      email: {
        required: true,
        type: String,
      },
      role: {
        required: true,
        type: String,
      },
      phoneNumber: {
        required: true,
        type: String,
      },
      password: {
        required: true,
        type: String,
      },
    };
    super(baseSchema, options);
  }
}
