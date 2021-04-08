"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 5000;
app.get('/', (req, res) => {
    res.send('It works');
});
app.listen(PORT, () => {
    console.log("Our server is running!");
});
//# sourceMappingURL=index.js.map