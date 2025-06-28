import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/removeOrderService";


class RemoveOrderController {
  async handle(req: Request, res: Response){
    
    try {
      const order_id = req.query.order_id as string;

      const removeOrderService = new RemoveOrderService();

      const order = await removeOrderService.execute({ order_id });

      return res.json(order);
    }catch(err) {
      return res.sendStatus(500)
    }

  }


} 

export { RemoveOrderController };

