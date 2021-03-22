import { RequestHandler } from 'express';

export const postOrder: RequestHandler = (req, res, next) => {
  const orderNumber: number = Math.floor(Math.random() * 10000000000);
  res.status(201).json({ orderNumber });
  next();
};
