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
exports.ListByCategoryController = void 0;
const listByCategoryService_1 = require("../../services/product/listByCategoryService");
class ListByCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category_id = req.query.category_id;
                const listCategoryService = new listByCategoryService_1.ListByCategoryService();
                const allCategory = yield listCategoryService.execute({ category_id });
                return res.json(allCategory);
            }
            catch (error) {
                return res.status(500).json({ error: error.message || "Internal server error" });
            }
        });
    }
}
exports.ListByCategoryController = ListByCategoryController;
