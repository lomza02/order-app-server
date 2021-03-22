"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToppings = void 0;
const fs_1 = __importDefault(require("fs"));
const toppings = fs_1.default.readFileSync('src/controllers/toppings.json', 'utf-8');
const getToppings = (req, res, next) => {
    res.json(JSON.parse(toppings));
    next();
};
exports.getToppings = getToppings;
