import express, { Request, Response } from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});