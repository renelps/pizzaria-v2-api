import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/listCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    try {
      const listCategoryService = new ListCategoryService();

      const category = await listCategoryService.execute();

      return res.json(category);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { ListCategoryController };
