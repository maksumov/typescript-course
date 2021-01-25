import express from 'express';
import { router } from './routes/loginRoutes';

const PORT = 3000;
const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
