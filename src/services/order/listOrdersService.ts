import prismaClient from "../../prisma";

class ListOrdersService {
  async execute(){
    try {

      const orders = await prismaClient.order.findMany({
        where: {
          status: false,
          draft: false
        },
        orderBy: {
          created_at: "desc"
        }
      })

      return orders;

    }catch(err) {
      throw new Error("Failed to list orders")
    }

  }
}

export { ListOrdersService }