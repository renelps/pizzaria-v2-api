import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors"
import path from "path"
import fileUpload from "express-fileupload";


const app = express();

app.use(express.json())
app.use(cors());
app.use(fileUpload({
  limits: { 
    fileSize: 50 * 1024 * 1024 
  }
}))
app.use(router)

app.use(
  '/files',
  express.static(path.resolve(__dirname, "..", "tmp"))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'internal error server'
  })

})



const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));