import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/sendOrderService";

class SendOrderController{
  async handle(req: Request, res: Response){
    try {
      
      const { order_id } = req.body;

      const sendOrderService = new SendOrderService();

      const order = await sendOrderService.execute({ order_id });

      return res.json(order)
    }catch(err){
      return res.status(500).json({ error: "Failed to send order" });
    }
  } 
}

export { SendOrderController }