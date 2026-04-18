const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  // you will expect to purchase a course
});

courseRouter.get("/preview", (req, res) => {});

module.exports = {
  courseRouter: courseRouter,
};
