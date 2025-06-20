import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";
import { isAuthencated } from "./middlewares/isAuthencated";
const router = Router();

router.post("/users", new CreateUserController().handle)


router.post("/session", new AuthUserController().handle)

router.get("/userinfo", isAuthencated,  new DetailUserController().handle)
export { router };