"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)({
    limits: {
        fileSize: 50 * 1024 * 1024
    }
}));
app.use(routes_1.router);
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, "..", "tmp")));
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'internal error server'
    });
});
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
