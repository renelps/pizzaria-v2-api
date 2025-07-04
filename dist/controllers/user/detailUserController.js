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
exports.DetailUserController = void 0;
const detailUserService_1 = require("../../services/user/detailUserService");
class DetailUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user_id = req.user_id;
                if (!user_id) {
                    return res.status(400).json({ error: "User ID not provided" });
                }
                const detailUserService = new detailUserService_1.DetailUserService();
                const user = yield detailUserService.execute(user_id);
                return res.json(user);
            }
            catch (error) {
                return res.status(500).json({ error: error.message || "Internal server error" });
            }
        });
    }
}
exports.DetailUserController = DetailUserController;
