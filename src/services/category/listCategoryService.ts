import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    try {
      const categories = await prismaClient.category.findMany({
        select: {
          id: true,
          name: true,
        },
      });

      return categories;
    } catch (error) {
      console.error("Failed to list categories:", error);
      throw new Error("Failed to list categories");
    }
  }
}

export { ListCategoryService };