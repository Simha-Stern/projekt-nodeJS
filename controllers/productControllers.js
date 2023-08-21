import axios from "axios";
import productService from "../services/productService.js";

const createData = async (address) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    response.data.forEach(element => {
      element.quantity = Math.floor(Math.random()*100)
    });
    // console.log((response.data[0]));
    productService.createData(response.data);
  } catch (error) {
    console.error(error);
  }
}


const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const createdProduct = await productService.createProduct(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error (controller 1)" });
  }
};

const getProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await productService.getProducts(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error (controller 2)" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error (controller 3)" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;
    const product = await productService.updateProduct(productId, updatedProduct);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error (controller 4)" });
  }
};

const updateQuantityProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const quantity = req.body.quantity;
    const product = await productService.updateQuantity(productId, quantity);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error (controller 4)" });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const deletedProduct = await productService.deleteProduct(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(deletedProduct);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error (controller 5)" });
  }
};



export default {
  createData,
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  updateQuantityProduct
};


