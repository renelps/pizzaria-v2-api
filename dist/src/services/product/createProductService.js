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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateProductService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, description, price, banner, category_id }) {
            try {
                const createNewProduct = yield prisma_1.default.product.create({
                    data: {
                        name: name,
                        description: description,
                        price: price,
                        banner: banner,
                        category_id: category_id
                    }
                });
                return createNewProduct;
            }
            catch (err) {
                throw new Error("Failed to create product");
            }
        });
    }
}
exports.CreateProductService = CreateProductService;
