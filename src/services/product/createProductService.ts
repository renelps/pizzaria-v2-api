import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService{
  async execute({ name, description, price, banner, category_id }: ProductRequest){

    try {
      const createNewProduct = await prismaClient.product.create({
        data: {
          name: name,
          description: description,
          price: price,
          banner: banner,
          category_id: category_id
        }
      })

      return createNewProduct;
    }catch(err) {
      throw new Error("Failed to create product")
    }

    
  }
}

export { CreateProductService }