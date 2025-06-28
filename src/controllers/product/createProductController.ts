import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/createProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { name, description, price, category_id } = req.body;

      if (!req.file) {
        return res.status(400).json({ error: "Error upload file" });
      }

      const { filename: banner } = req.file;

      const createProductService = new CreateProductService();

      const newProduct = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
      });

      return res.json(newProduct);
    } catch (error: any) {
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  }
}

export { CreateProductController };

