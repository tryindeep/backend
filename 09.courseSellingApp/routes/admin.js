const { Router } = require("express");

const adminRouter = Router();

adminRouter.use(adminMiddleware);

adminRounter.post("/signup", (req, res) => {
  res.json({
    message: "Tridip You are signed Up",
  });
});

adminRounter.post("/signin", (req, res) => {});

adminRounter.post("/course", (req, res) => {});
adminRounter.put("/course", (req, res) => {});
adminRounter.get("/course/bulk", (req, res) => {});

module.exports = {
  adminRouter: adminRouter,
};
