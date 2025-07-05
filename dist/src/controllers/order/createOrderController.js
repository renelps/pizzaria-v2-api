"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderController = void 0;
const createOrderService_1 = require("../../services/order/createOrderService");
class CreateOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, table } = req.body;
                const createOrderService = new createOrderService_1.CreateOrderService();
                const order = yield createOrderService.execute({ name, table });
                return res.json(order);
            }
            catch (error) {
                return res.status(500).json({ error: error.message || "Internal server error" });
            }
        });
    }
}
exports.CreateOrderController = CreateOrderController;
