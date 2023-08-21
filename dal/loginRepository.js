import { error } from "console";
import fs from "fs/promises";

const USERS_FILE_PATH = "./db/users.json";

const readUsersFromFile = async () => {
  const data = await fs.readFile(USERS_FILE_PATH, "utf8");
  console.log(1.1);
  return JSON.parse(data);
};

const writeUsersToFile = async (users) => {
  const updatedDataJSON = JSON.stringify(users);
  await fs.writeFile(USERS_FILE_PATH, updatedDataJSON, "utf8");
};

const findId = async () => {
  const users = await readUsersFromFile();
  const index = users[users.length-1].id;
  console.log(index);
  return index+1
};

const findEmail = async (email) => {
  const users = await readUsersFromFile();
  return users.find((user) => user.email === email);
}


const checkEmailAndPass = async ({email},{password}) => {
  const users = await readUsersFromFile();
  console.log(1.2);
  return users.find((user) => user.email === email && user.password === password);
};

const creatUser = async (userData) => {
  const users = await readUsersFromFile();
  console.log(userData.email);
  const email = await findEmail(userData.email);
 if (!email){
console.log(email);
  users.push(userData);
  writeUsersToFile(users);
  return userData;}
  // console.error(`email not speshly - unick`);
};

export default {
  checkEmailAndPass,
  findId,
  creatUser,
};
