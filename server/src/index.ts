import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { router as controllerRouter } from './controllers/decorators/controllers';
import './controllers/loginController';
import { router } from './routes/loginRoutes';

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['kjasdasd'] }));
app.use(router);
app.use(controllerRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
