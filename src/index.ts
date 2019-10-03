import Database from "./libs/Database";
import config from "./config/configuration";
import Server from "./Server";

Database.open({ mongoUri: config.mongoUri })
  .then(() => {
    const server = new Server(config);
    server.bootstrap().listen();
  })
  .catch(err => {
    console.log("Database not connected" + err);
  });
