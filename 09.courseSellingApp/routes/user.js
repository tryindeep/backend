// const express =  require("express");
// const Router = express.Router;

const { Router } = require("express");
const userRouter = Router(); // its not a class but a fuction
const jwt = require("jsonwebtoken");

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "Tridip You are signed Up",
  });
});
userRouter.post("/signin", (req, res) => {});
userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "Tridip You are signed Up",
  });
});

module.exports = {
  userRouter: userRouter,
};
