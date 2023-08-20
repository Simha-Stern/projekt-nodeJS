import express from "express";
import productController from "/nodejs/3 server1/controllers/productControllers"

const router = express.Router();

router.get("/", productController.getAllProducts)

router.get("/:id", productController.getProduct)

router.post("/", productController.createProduct);

router.put("/:id", productController.updateProduct)

router.delete("/:id", productController.deleteProduct)

export default router 
