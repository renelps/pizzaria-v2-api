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
exports.FinishOrderController = void 0;
const finishOrderService_1 = require("../../services/order/finishOrderService");
class FinishOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { order_id } = req.body;
                const finishOrderService = new finishOrderService_1.FinishOrderService();
                const order = yield finishOrderService.execute({ order_id });
                return res.json(order);
            }
            catch (err) {
                return res.status(500).json({ error: "An error occurred while finishing the order." });
            }
        });
    }
}
exports.FinishOrderController = FinishOrderController;
