"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toppings_1 = require("../controllers/toppings");
const router = express_1.Router();
router.get('/', toppings_1.getToppings);
exports.default = router;
