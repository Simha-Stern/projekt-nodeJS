import productRepository from "/nodejs/3 server1/dal/productsRepository";
// import { hash } from "bcrypt";
// import joi from "joi";

// const productSchema = joi.object({
//   name: joi.string().required(),
//   email: joi.string().email().required(),
//   password: joi.string().min(8).required(),
// });

// const createUser = async (user) => {
//   const { error } = productSchema.validate(user);
//   if (error) {
//     throw new Error(`Validation error: ${error.details[0].message}`);
//   }

//   const hashedPassword = await hash(user.password, 10);
//   user.password = hashedPassword;

//   return userRepository.createUser(user);
// };

const getProducts = async (productId) => {
  return productRepository.getProducts(productId);
};

const getAllProducts = async () => {
  return productRepository.getAllProducts();
};

const updateProduct = async (productId, updatedProduct) => {
  return productRepository.updateProduct(productId, updatedProduct);
};

const deleteProduct = async (productId) => {
  return productRepository.deleteProduct(productId);
};

export default {
  // createProduct,
  getProducts,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
