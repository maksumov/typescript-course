import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['kjasdasd'] }));
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
