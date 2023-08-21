import loginService from "../services/loginService.js";

const access = async (req, res, next) => {
    try{
        const userData = req.query;
        const userRights = await loginService.access(userData);
        // console.log(user);
        if (!userRights) {
          return res.status(404).json({ message: "User not Rights" });
        }
        res.json({ message: "User meneger" });
        }catch (error) {
          console.error("Error:", error);
          res.status(404).json({ error: "Server error" });
        }
    next()
};




export default {
    access,
}