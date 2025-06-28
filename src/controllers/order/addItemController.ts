import { Request, Response } from "express";
import { AddItemService } from "../../services/order/addItemService";

class AddItemController {
  async handle(req: Request, res: Response){

    try {
      const { order_id, product_id, amount } = req.body;      
      const addItemService = new AddItemService();


      const item = await addItemService.execute({ order_id, product_id, amount });

      return res.json(item)
      
    }catch(err) {
      return res.status(500).json({ error: "Failed to add item" });
    }
  }
}

export { AddItemController }