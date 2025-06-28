import prismaClient from "../../prisma";

interface OrderRequest {
  name: string;
  table: number;
}

class CreateOrderService {
  async execute({ name, table }: OrderRequest) {
    try {
      const order = await prismaClient.order.create({
        data: {
          name,
          table,
        },
      });

      return order;
    } catch (error) {
      console.error("Failed to create order:", error);
      throw new Error("Failed to create order");
    }
  }
}

export { CreateOrderService };










