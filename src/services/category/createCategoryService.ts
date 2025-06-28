import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === '') {
      throw new Error("Invalid name");
    }

    try {
      const newCategory = await prismaClient.category.create({
        data: {
          name,
        },
        select: {
          id: true,
          name: true,
        },
      });

      return newCategory;
    } catch (error) {
      console.error("Failed to create category:", error);
      throw new Error("Failed to create category");
    }
  }
}

export { CreateCategoryService };
