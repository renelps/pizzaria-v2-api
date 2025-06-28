import prismaClient from "../../prisma";

class RemoveItemService {
  async execute({ item_id }: { item_id: string }) {
    try {
      const removeItem = await prismaClient.item.delete({
        where: {
          id: item_id,
        },
      });

      return removeItem;

    } catch (err: any) {
      console.error("Failed to remove item:", err.message || err);
      throw new Error("Failed to remove item");
    }
  }
}

export { RemoveItemService };