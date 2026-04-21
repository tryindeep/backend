const { Router } = require("express");
const {userMiddleware} = require("../middleware/user.middleware.js");
const { PurchaseModel , CourseModel } = require("../config/db.js");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async(req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;
  // you will expect to purchase a course
  // should check user has acutally paid the price
  await PurchaseModel.create({
    courseId,
    userId
  })
  res.json({
    message : "You have sucessfuly bought the course"
  })

});

courseRouter.get("/preview", async(req, res) => {
  const courses = await CourseModel.find({})  // {} => means give the all courses
  res.json({
    courses
  })
});

module.exports = {
  courseRouter: courseRouter,
};
