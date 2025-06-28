import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/createOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    try {
      const { name, table } = req.body;

      const createOrderService = new CreateOrderService();

      const order = await createOrderService.execute({ name, table });

      return res.json(order);
    } catch (error: any) {
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  }
}

export { CreateOrderController };