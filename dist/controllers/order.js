"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOrder = void 0;
const postOrder = (req, res, next) => {
    const orderNumber = Math.floor(Math.random() * 10000000000);
    res.status(201).json({ orderNumber });
    next();
};
exports.postOrder = postOrder;
