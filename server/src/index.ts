import express, { Request, Response } from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <div>
    <h1>Hi there!</h1>
  </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
