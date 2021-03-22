"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scoops_1 = require("../controllers/scoops");
const router = express_1.Router();
router.get('/', scoops_1.getScoops);
exports.default = router;
