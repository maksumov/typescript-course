import bodyParser from 'body-parser';
import express from 'express';
import { router } from './routes/loginRoutes';

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
