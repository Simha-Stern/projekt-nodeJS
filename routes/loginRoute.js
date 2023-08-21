import express from "express";
import loginController from "../controllers/loginControllers.js"
import loginMiddleware from "../middlewares/loginMiddleware.js";

const route = express.Router();

// route.get("/",loginMiddleware.access, loginController.get);

route.post("/",loginMiddleware.access, loginController.creatUser);

route.post("/login", loginController.checkEmailAndPass);

export default route;
