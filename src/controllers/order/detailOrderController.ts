import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/detailOrderService";

class DetailOrderController {
  async handle(req: Request, res: Response){
    try {

      const order_id = req.query.order_id as string;

      const detailOrderService = new DetailOrderService();

      const orders = await detailOrderService.execute({ order_id });

      return res.json(orders)
    }catch(err){
      return res.status(500).json({ error: "Erro ao buscar detalhes do pedido" });
    }
  }
}

export { DetailOrderController }