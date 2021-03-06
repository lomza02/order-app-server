import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import scoopsRoutes from './routes/scoops';
import toppingsRoutes from './routes/toppings';
import orderRoutes from './routes/order';

const app = express();
app.use(cors());
app.use(json());
app.use(express.static('public'));
app.use('/scoops', scoopsRoutes);
app.use('/toppings', toppingsRoutes);
app.use('/order', orderRoutes);

const PORT = process.env.PORT || 5000;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log('Server is running on port 3030');
});
