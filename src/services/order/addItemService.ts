import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}
class AddItemService {
  async execute({ order_id, product_id, amount }: ItemRequest){


    try {

      const addItem = await prismaClient.item.create({
        data: {
          order_id: order_id,
          product_id: product_id,
          amount
        }
      })

      return addItem;

    }catch(err) {
      throw new Error("Failed to add item")
    }
  }
}

export { AddItemService }