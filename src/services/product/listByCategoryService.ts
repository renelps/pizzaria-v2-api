import prismaClient from "../../prisma";

class ListByCategoryService {
  async execute({ category_id }: { category_id: string }) {
    try {
      const allCategories = await prismaClient.product.findMany({
        where: {
          category_id,
        },
      });

      return allCategories;
    } catch (error) {
      console.error("Failed to list products by category:", error);
      throw new Error("Failed to list products by category");
    }
  }
}

export { ListByCategoryService };