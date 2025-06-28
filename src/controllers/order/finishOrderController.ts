import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/finishOrderService";


class FinishOrderController {
  async handle(req: Request, res: Response){
    try {
      const { order_id } = req.body;

      const finishOrderService = new FinishOrderService();

      const order = await finishOrderService.execute({ order_id })

      return res.json(order)
    }catch(err) {
      return res.status(500).json({ error: "An error occurred while finishing the order." });
    }
  }
}

export { FinishOrderController }