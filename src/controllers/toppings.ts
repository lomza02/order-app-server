import { RequestHandler } from 'express';
import fs from 'fs';

const toppings = fs.readFileSync('src/controllers/toppings.json', 'utf-8');

export const getToppings: RequestHandler = (req, res, next) => {
  res.json(JSON.parse(toppings));
  next();
};
