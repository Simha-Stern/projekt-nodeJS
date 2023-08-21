import productRepository from "../dal/productsRepository.js";

const createData = async (data) => {
  return productRepository.writeProductsToFile(data);
};

const getProducts = async (productId) => {
  return productRepository.getProduct(productId);
};

const getAllProducts = async () => {
  return productRepository.getAllProducts();
};

const createProduct = async (newProduct) => {
  return productRepository.createProduct(newProduct);
};

const updateProduct = async (productId, updatedProduct) => {
  return productRepository.updateProduct(productId, updatedProduct);
};

const updateQuantity = (productId, quantity) => {
  return productRepository.updateQuantity(productId, quantity);
};

const deleteProduct = async (productId) => {
  return productRepository.deleteProduct(productId);
};

export default {
  createData,
  createProduct,
  getProducts,
  getAllProducts,
  updateProduct,
  updateQuantity,
  deleteProduct,
};
