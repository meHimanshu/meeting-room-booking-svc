import * as express from "express";
import IConfig from "./config/IConfig";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as morganBody from "morgan-body";
import * as bodyParser from "body-parser";
import router from "./router";
import errorHandler from "./middlewares/errorHandler";

export default class Server {
  private app: express.Express;
  constructor(private config: IConfig) {
    this.app = express();
  }

  public bootstrap() {
    this.initCookieParser();
    this.initCors();
    this.initJsonParser();
    this.initLogger();
    this.setupRoute();
    return this;
  }

  get application() {
    return this.app;
  }

  private initCors() {
    this.app.use(
      cors({
        optionsSuccessStatus: 200,
        origin: this.config.corsOrigin.split(",")
      })
    );
  }

  private initCookieParser() {
    this.app.use(cookieParser());
  }

  private initJsonParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initLogger() {
    morganBody(this.app);
  }

  private setupRoute() {
    const { apiPrefix } = this.config;
    this.app.use(apiPrefix, router);
    this.app.use(errorHandler);
  }

  public listen() {
    const { port, nodeEnv } = this.config;
    const server = this.app.listen(port);
    server.on("listening", () => {
      const ann = `|| App is running at port '${port}' in '${nodeEnv}' mode ||`;
      console.log(ann.replace(/[^]/g, "-"));
      console.log(ann);
      console.log(ann.replace(/[^]/g, "-"));
      console.log("Press CTRL-C to stop\n");
    });
  }
}
