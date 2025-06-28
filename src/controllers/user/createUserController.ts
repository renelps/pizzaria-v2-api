import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/createUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({ name, email, password });

      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message || "Failed to create user" });
    }
  }
}

export { CreateUserController };