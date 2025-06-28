import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/removeItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    try {
      const item_id = req.query.item_id as string;

      const removeItemService = new RemoveItemService();
      const item = await removeItemService.execute({ item_id });

      return res.json(item);

    } catch (err: any) {
      console.error("Failed to remove item:", err.message || err);
      return res.status(500).json({ error: "Failed to remove item" });
    }
  }
}

export { RemoveItemController };
