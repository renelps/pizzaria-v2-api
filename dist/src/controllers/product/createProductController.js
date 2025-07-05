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
exports.CreateProductController = void 0;
const createProductService_1 = require("../../services/product/createProductService");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
class CreateProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, price, category_id } = req.body;
                if (!req.files || Object.keys(req.files).length === 0) {
                    return res.status(400).json({ error: "Error upload file" });
                }
                const file = req.files['file'];
                const createProductService = new createProductService_1.CreateProductService();
                const resultFile = yield new Promise((resolver, reject) => {
                    cloudinary_1.v2.uploader.upload_stream({}, function (error, result) {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolver(result);
                    }).end(file.data);
                });
                const newProduct = yield createProductService.execute({
                    name,
                    price,
                    description,
                    banner: resultFile.url,
                    category_id,
                });
                return res.json(newProduct);
            }
            catch (error) {
                return res.status(500).json({ error: error.message || "Internal server error" });
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
