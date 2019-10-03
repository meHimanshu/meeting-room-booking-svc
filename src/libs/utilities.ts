import * as mongoose from 'mongoose';

export const isValidObjectId = (id: any) => mongoose.Types.ObjectId.isValid(id);

export const generateObjectId = () => mongoose.Types.ObjectId();

