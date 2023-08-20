import fs from "fs/promises"; // Using promises version of fs
import {v4} from "uuid"

const PRODUCTS_FILE_PATH = "./db/products.json";

const readProductsFromFile = async () => {
  const data = await fs.readFile(PRODUCTS_FILE_PATH, "utf8");
  return JSON.parse(data);
};

const writeProductsToFile = async (products) => {
  const updatedDataJSON = JSON.stringify(products);
  await fs.writeFile(PRODUCTS_FILE_PATH, updatedDataJSON, "utf8");
};

const createProduct = async (product) => {
  const products = await readProductsFromFile();
  // product.id = v4();
  products.push(product);
  await writeProductsToFile(products);
  return product;
};

const getProduct = async (productId) => {
  const products = await readProductsFromFile();
  return products.find((product) => product.id == productId);
};

const getAllProducts = async () => {
  const products = await readProductsFromFile();
  return products;
};

const updateProduct = async (productId, updatedproduct) => {
  const products = await readProductsFromFile();
  const productIndex = products.findIndex((product) => product.id == productId);

  if (productIndex === -1) {
    return null;
  }

  products[productIndex] = { ...products[productIndex], ...updatedproduct };
  await writeProductsToFile(products);

  return products[productIndex];
};

const deleteProduct = async (productId) => {
  const products = await readProductsFromFile();
  const productIndex = products.findIndex((product) => product.id == productId);

  if (productIndex === -1) {
    return null;
  }

  const deletedproduct = products.splice(productIndex, 1)[0];
  await writeProductsToFile(products);

  return deletedproduct;
};

export default {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
