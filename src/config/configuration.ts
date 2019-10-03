import IConfig from "./IConfig";
import dotenv = require("dotenv");
dotenv.config();

const configuration = {
  apiPrefix: process.env.API_PREFIX,
  mongoUri: process.env.MONGO_URL,
  port: process.env.PORT,
  corsOrigin: process.env.CORS_ORIGIN,
  nodeEnv:process.env.NODE_ENV
} as IConfig;

export default configuration;
