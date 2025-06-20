
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface UserRequest {
  email: string;
  password: string;
}
class AuthUserService {
  async execute({ email, password }: UserRequest) {
    
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      }
    })


    if(!user) throw new Error("User does not exist. You need to create an account before you can log in.")

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("user/password incorrect")
    }


    const token = sign(
      {
        name: user.name,
        user: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }


  }
}

export { AuthUserService }