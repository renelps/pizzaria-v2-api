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
exports.DetailOrderController = void 0;
const detailOrderService_1 = require("../../services/order/detailOrderService");
class DetailOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order_id = req.query.order_id;
                const detailOrderService = new detailOrderService_1.DetailOrderService();
                const orders = yield detailOrderService.execute({ order_id });
                return res.json(orders);
            }
            catch (err) {
                return res.status(500).json({ error: "Erro ao buscar detalhes do pedido" });
            }
        });
    }
}
exports.DetailOrderController = DetailOrderController;
