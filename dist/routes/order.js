"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_1 = require("../controllers/order");
const router = express_1.Router();
router.post('/', order_1.postOrder);
exports.default = router;
