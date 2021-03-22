"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScoops = void 0;
const fs_1 = __importDefault(require("fs"));
const scoops = fs_1.default.readFileSync('src/controllers/scoops.json', 'utf-8');
const getScoops = (req, res, next) => {
    res.json(JSON.parse(scoops));
    next();
};
exports.getScoops = getScoops;
