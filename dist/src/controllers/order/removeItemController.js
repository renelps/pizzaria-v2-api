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
exports.RemoveItemController = void 0;
const removeItemService_1 = require("../../services/order/removeItemService");
class RemoveItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const item_id = req.query.item_id;
                const removeItemService = new removeItemService_1.RemoveItemService();
                const item = yield removeItemService.execute({ item_id });
                return res.json(item);
            }
            catch (err) {
                console.error("Failed to remove item:", err.message || err);
                return res.status(500).json({ error: "Failed to remove item" });
            }
        });
    }
}
exports.RemoveItemController = RemoveItemController;
