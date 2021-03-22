"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const scoops_1 = __importDefault(require("./routes/scoops"));
const toppings_1 = __importDefault(require("./routes/toppings"));
const order_1 = __importDefault(require("./routes/order"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.json());
app.use(express_1.default.static('public'));
app.use('/scoops', scoops_1.default);
app.use('/toppings', toppings_1.default);
app.use('/order', order_1.default);
const PORT = process.env.PORT || 5000;
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => {
    console.log('Server is running on port 3030');
});
