import { Router } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";
import { isAuthencated } from "./middlewares/isAuthencated";
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { ListCategoryController } from "./controllers/category/listCategoryController";
import { CreateProductController } from "./controllers/product/createProductController";
import { ListByCategoryController } from "./controllers/product/listByCategoryController";
import { CreateOrderController } from "./controllers/order/createOrderController";
import { RemoveOrderController } from "./controllers/order/removeOrderController";
import { AddItemController } from "./controllers/order/addItemController";
import { RemoveItemController } from "./controllers/order/removeItemController";
import { SendOrderController } from "./controllers/order/sendOrderController";
import { ListOrdersController } from "./controllers/order/listOrdersController";
import { DetailOrderController } from "./controllers/order/detailOrderController";
import { FinishOrderController } from "./controllers/order/finishOrderController";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthencated,  new DetailUserController().handle);


router.post("/category", isAuthencated, new CreateCategoryController().handle);

router.get("/category", isAuthencated, new ListCategoryController().handle);

router.post("/product", isAuthencated, new CreateProductController().handle);

router.get("/category/product", isAuthencated, new ListByCategoryController().handle)

router.post("/order", isAuthencated, new CreateOrderController().handle)

router.delete("/order", isAuthencated, new RemoveOrderController().handle)

router.post("/order/add", isAuthencated, new AddItemController().handle)

router.delete("/order/remove", isAuthencated, new RemoveItemController().handle)

router.put("/order/send", isAuthencated, new SendOrderController().handle)

router.get("/orders", isAuthencated, new ListOrdersController().handle)

router.get("/order/detail", isAuthencated, new DetailOrderController().handle)

router.put("/order/finish", isAuthencated, new FinishOrderController().handle)

export { router };
