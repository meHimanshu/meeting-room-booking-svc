import * as mongoose from "mongoose";

interface IDatabaseConfig {
  mongoUri: string;
}

export default class Database {
  public static open({ mongoUri }: IDatabaseConfig) {
    return new Promise((resolve, reject) => {
      const options: any = {
        autoIndex: false,
        bufferMaxEntries: 0,
        keepAlive: 1,
        poolSize: 10,
        reconnectInterval: 500,
        reconnectTries: Number.MAX_VALUE,
        useNewUrlParser: true
      };
      mongoose.connect(mongoUri, options, err => {
        if (err) {
          reject(err);
        }
        resolve();
      });

      mongoose.connection.on("error", () => {
        reject(`Unable to connect database: ${mongoUri}`);
      });
    });
  }
}
