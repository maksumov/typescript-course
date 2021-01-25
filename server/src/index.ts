import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { router } from './routes/loginRoutes';

const PORT = 3000;
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieSession({ keys: ['kjasdasd'] }));
// app.use(router);

// app.listen(PORT, () => {
//   console.log(`Server started at port ${PORT}`);
// });

class Server {
  app: express.Express = express();

  constructor() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ['kjasdasd'] }));
    this.app.use(router);
  }

  start() {
    this.app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  }
}

new Server().start();
