import prismaClient from "../../prisma";

class DetailUserService {
  async execute(user_id: string) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          id: user_id,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return user;
    } catch (error) {
      console.error("Failed to fetch user details:", error);
      throw new Error("Failed to fetch user details");
    }
  }
}

export { DetailUserService };