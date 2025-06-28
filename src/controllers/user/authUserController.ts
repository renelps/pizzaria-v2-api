import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/authUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const authUserService = new AuthUserService();

      const auth = await authUserService.execute({ email, password });

      return res.json(auth);
    } catch (error: any) {
      return res.status(401).json({ error: error.message || "Unauthorized" });
    }
  }
}

export { AuthUserController };