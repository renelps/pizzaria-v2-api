import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/detailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    try {
      const user_id = req.user_id;
      
      if (!user_id) {
        return res.status(400).json({ error: "User ID not provided" });
      }

      const detailUserService = new DetailUserService();

      const user = await detailUserService.execute(user_id);

      return res.json(user);
    } catch (error: any) {
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  }
}

export { DetailUserController };