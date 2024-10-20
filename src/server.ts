import { Express } from 'express';
import * as http from 'node:http';
import * as express from 'express';
import router from 'src/router';
import helmet from 'helmet';
import * as process from 'node:process';
import config from 'src/config';

export default class Server {
  app: Express;

  constructor() {
    this.app = express();
  }

  register() {
    const port = config.PORT;

    console.log(process.env.PORT, process.cwd());

    this.app.use(helmet());

    this.app.use('/api', router);

    return new Promise<void>((resolve, reject) => {
      http.createServer(this.app).listen(port, () => {
        console.log(`Server running in port: ${port}`);
        resolve();
      });
    })
  }
}