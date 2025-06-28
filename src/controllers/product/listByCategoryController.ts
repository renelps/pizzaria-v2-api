import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/listByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    try {
      const category_id = req.query.category_id as string;

      const listCategoryService = new ListByCategoryService();

      const allCategory = await listCategoryService.execute({ category_id });

      return res.json(allCategory);
    } catch (error: any) {
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  }
}

export { ListByCategoryController };