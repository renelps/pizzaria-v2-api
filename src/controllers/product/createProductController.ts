import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/createProductService";
import { UploadedFile } from "express-fileupload";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})




class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { name, description, price, category_id } = req.body;

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ error: "Error upload file" });
      }

      const file = req.files['file'] as UploadedFile;

      const createProductService = new CreateProductService();

      const resultFile: UploadApiResponse = await new Promise((resolver, reject) => {
        cloudinary.uploader.upload_stream({}, function(error, result){
          if(error){
            reject(error)
            return;
          }

          resolver(result)
        }).end(file.data)
      })
      

      const newProduct = await createProductService.execute({
        name,
        price,
        description,
        banner: resultFile.url,
        category_id,
      });

      return res.json(newProduct);
    } catch (error: any) {
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  }
}

export { CreateProductController };

