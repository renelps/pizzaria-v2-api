import prismaClient from "../../prisma"

interface OrderRequest {
  order_id: string
}
class RemoveOrderService {
  async execute({ order_id }: OrderRequest){
    try {

      const order = await prismaClient.order.delete({
        where: {
          id: order_id,
        }
      })

      return order;
    }catch(err) {
      throw new Error("Failed to remove order");
    }
  }
}

export { RemoveOrderService }