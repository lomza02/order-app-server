import { RequestHandler } from 'express';
import fs from 'fs';

const scoops = fs.readFileSync('src/controllers/scoops.json', 'utf-8');

export const getScoops: RequestHandler = (req, res, next) => {
  res.json(JSON.parse(scoops));
  next();
};
