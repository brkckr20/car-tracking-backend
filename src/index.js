"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send({ upcomingProcessList: data_1.upcomingProcessList, processList: data_1.processList });
});
app.get('/cards', (req, res) => {
    res.send({ carList: data_1.carList, processList: data_1.processList });
});
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
