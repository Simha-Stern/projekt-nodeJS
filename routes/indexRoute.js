import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hello to my project!");
  console.log("hire");
});


export default route