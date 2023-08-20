import express from "express";
import productController from "../controllers/productControllers.js"

const router = express.Router();

// GET localhost:3000/api/products
router.get("/", productController.getAllProducts)

// GET localhost:3000/api/products/1
router.get("/:id", productController.getProduct)

// POST localhost:3000/api/products
router.post("/", productController.createProduct);

// PUT localhost:3000/api/products/1
router.put("/:id", productController.updateProduct);

// PATCH localhost:3000/api/products/1
router.put("/:id", productController.updateQuantityProduct);

// DELET localhost:3000/api/products/1
router.delete("/:id", productController.deleteProduct)

export default router 
