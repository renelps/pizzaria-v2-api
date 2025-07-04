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
exports.SendOrderController = void 0;
const sendOrderService_1 = require("../../services/order/sendOrderService");
class SendOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { order_id } = req.body;
                const sendOrderService = new sendOrderService_1.SendOrderService();
                const order = yield sendOrderService.execute({ order_id });
                return res.json(order);
            }
            catch (err) {
                return res.status(500).json({ error: "Failed to send order" });
            }
        });
    }
}
exports.SendOrderController = SendOrderController;
