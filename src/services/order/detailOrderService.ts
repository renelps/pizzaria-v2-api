import prismaClient from "../../prisma";

interface DetailRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: DetailRequest){


    try {
      const orders = await prismaClient.item.findMany({
        where: {
          order_id: order_id
        },
        include: {
          product: true,
          order: true
        }
      })

      return orders;
      
    }catch(err) {
      throw new Error("Failed to retrieve order details.");
    }

  }
}

export { DetailOrderService }