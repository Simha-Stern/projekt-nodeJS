import productRepository from "../dal/productsRepository.js";

const getProducts = async (productId) => {
  return productRepository.getProduct(productId);
};

const getAllProducts = async () => {
  return productRepository.getAllProducts();
};

const createProduct = async (newProduct) => {
  return productRepository.createProduct(newProduct);
}

const updateProduct = async (productId, updatedProduct) => {
  return productRepository.updateProduct(productId, updatedProduct);
};

const deleteProduct = async (productId) => {
  return productRepository.deleteProduct(productId);
};

export default {
  createProduct,
  getProducts,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
