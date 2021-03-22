import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import scoopsRoutes from './routes/scoops';

const app = express();
app.use(cors());
app.use(json());
app.use(express.static('public'));
app.use('/scoops', scoopsRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
});
