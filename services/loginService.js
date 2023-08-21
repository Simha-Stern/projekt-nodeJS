import joi from "joi";
import { compare } from "bcrypt";
import loginRepository from "../dal/loginRepository.js";

const userSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const checkEmailAndPass = async(user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }
  const userMatch = await loginRepository.checkEmailAndPass(user)
  console.log("service", userMatch);
  if (userMatch) {
    // const passwordMatch = await compare(user.password, userMatch.password);
    // console.log("service:", passwordMatch);
    return userMatch;
  } else {
    return false;
  }
};

const creatUser = async (userData) => {
  const newUserId = {};
  newUserId.id = await loginRepository.findId();
  const newUser = await {...newUserId,...userData}
  const creating = await loginRepository.creatUser(newUser);
  if (!creating){
    return null;
  }
  return creating;
};

export default {
    checkEmailAndPass,
    creatUser,
}
