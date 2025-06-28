import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface UserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: UserRequest) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          email,
        },
      });

      if (!user)
        throw new Error(
          "User does not exist. You need to create an account before you can log in."
        );

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("User/password incorrect");
      }

      const token = sign(
        {
          name: user.name,
          user: user.email,
        },
        process.env.JWT_SECRET || "",
        {
          subject: user.id,
          expiresIn: "30d",
        }
      );

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
      };
    } catch (error) {
      console.error("Authentication error:", error);
      throw new Error("Authentication failed");
    }
  }
}

export { AuthUserService };
