import fs from "fs/promises";

const USERS_FILE_PATH = "./db/users.json";

const readUsersFromFile = async () => {
  const data = await fs.readFile(USERS_FILE_PATH, "utf8");
  console.log(1.1);
  return JSON.parse(data);
};

const checkEmailAndPass = async ({email},{password}) => {
  const users = await readUsersFromFile();
  console.log(1.2);
  return users.find((user) => user.email === email && user.password === password);
};

export default {
  checkEmailAndPass,
};
