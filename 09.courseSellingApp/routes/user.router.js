// const express =  require("express");
// const Router = express.Router;

const { Router } = require("express");
const userRouter = Router(); // its not a class but a fuction
const jwt = require("jsonwebtoken");
const { UserModel , PurchaseModel, CourseModel } = require("../config/db.js");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const {userMiddleware} = require("../middleware/user.middleware.js")
const { JWT_USER_SECRET } = require("../config/config.js");

// schema
const requiredBody = z.object({
  email: z.string().min(5).max(100).email(),
  password: z.string().min(5).max(100),
  firstname: z.string().min(1).max(100).trim(),
  lastname: z.string().min(1).max(100).trim(),
});
userRouter.post("/signup", async (req, res) => {
  try {
    // valid input
    const parsed = requiredBody.safeParse(req.body);
    if (!parsed.success) {
      return res.json({
        message: "Incorrect Format",
        error: parsed.error.issues,
      });
    }

    const { email, password, firstname, lastname } = parsed.data; // parsed data

    // checking user exits
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exits " });
    }

    //hashing password
    const hashedpassword = await bcrypt.hash(password, 10);
    await UserModel.create({
      email: email,
      password: hashedpassword, // hashed password
      firstname: firstname,
      lastname: lastname,
    });
    res.status(201).json({ message: "user registerd Sucessfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await UserModel.findOne({
    email: email,
  });

  if (!foundUser) {
    res.status(403).json({ message: "User does not exits in our database" });
  }

  const passwordMatched = await bcrypt.compare(password, foundUser.password);

  if (password) {
    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      JWT_USER_SECRET,
    );

    // cookie login

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

userRouter.get("/purchases",userMiddleware, async(req, res) => {

   const userId = req.userId;
    const purchases = await PurchaseModel.find({
       userId
     })
   const courseData  = await CourseModel.find({
    _id : {$in: purchases.map(x => x.courseId)}
   })
   
  res.json({
   purchases,
   courseData
  });
});

module.exports = {
  userRouter: userRouter,
};
