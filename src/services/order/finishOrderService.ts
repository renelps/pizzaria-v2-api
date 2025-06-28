import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}
class FinishOrderService {
  async execute({ order_id }: OrderRequest){


    try {
      const order = prismaClient.order.update({
        where: {
          id: order_id
        },
        data: {
          status: true
        }
      })

      return order;
    }catch(err){
      throw new Error("Failed to finish the order.");
    }
  }
}

export { FinishOrderService }