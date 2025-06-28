import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/createCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    try {
      const { name } = req.body;

      const createCategoryService = new CreateCategoryService();

      const category = await createCategoryService.execute({ name });

      return res.json(category);
    } catch {
      return res.sendStatus(500);
    }
  }
}

export { CreateCategoryController };
