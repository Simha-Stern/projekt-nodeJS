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
}


const checkEmailAndPass = async ({email},{password}) => {
  const users = await readUsersFromFile();
  console.log(1.2);
  return users.find((user) => user.email === email && user.password === password);
};

const creatUser = async (userData) => {
  const users = await readUsersFromFile();
  users.push(userData);
  writeUsersToFile(users);
  return userData;
};

export default {
  checkEmailAndPass,
  findId,
  creatUser,
};
