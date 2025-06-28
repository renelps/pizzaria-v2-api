import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/listOrdersService";

class ListOrdersController {
  async handle(req: Request, res: Response){
    try {

      const listOrdersService = new ListOrdersService();

      const orders = await listOrdersService.execute();

      return res.json(orders)

    }catch(err) {
      return res.status(500).json({ error: "Failed to list orders" });
    }
  }
}


export { ListOrdersController }