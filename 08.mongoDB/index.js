const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "tryindeep";
const { z } = require("zod");

const { mongoose } = require("mongoose");
// const connectDB = async () => {
//   //checking db connection
//   try {
//     await mongoose.connect(
mongoose.connect(
  "mongodb+srv://iamtridip06_db_user:XM6O9a7TvtkShxdk@cluster0.m5z7gpt.mongodb.net/todo-app-database",
);
//     );
//     console.log("DB CONNETED");
//   } catch (e) {
//     console.log("connection error : " + e);
//     process.exit(1);
//   }
// };
const { UserModel, TodoModel } = require("./db");

app.use(express.json());

// signUp endpoint
app.post("/signup", async (req, res) => {
  //schema of a jod object
  // uppercase, lowercase,  splcharacter
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password: z.string().min(3).max(100),
  });
  //parsing the data
  // const parseData = requiredBody.parse(req.body); //  either return the data or throw the error
  const parseDataWithSuccess = requiredBody.safeParse(req.body); // it's better
    // 1. how to show the user the exact error
  /*
  
      {
        success: true  || false
        data : {},
        errors : [ if any error]
      } 
  */



  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parseDataWithSuccess.error,
    });
    return;
  }

  // input validation
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  let errorThrow = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5); // hashing
    console.log(hashedPassword);

    await UserModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });
  } catch (e) {
    console.log("error while sign up putting in db ");
    res.json({
      message: "user already exists",
    });
    errorThrow = true;
  }
  if (!errorThrow) {
    res.json({
      message: "You are logged In",
    });
  }
});

// Sign In endpoint
app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  if (!user) {
    res.json(403).json({
      massage: "User does not exits in our database",
    });
    return;
  }

  const passwordMatched = await bcrypt.compare(password, user.password); //bcrypt comparing

  if (passwordMatched) {
    const token = jwt.sign(
      {
        // payload
        id: user._id.toString(),
      },
      JWT_SECRET,
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials",
    });
  }
});

// AuthMiddleware
const auth = (req, res, next) => {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.staus(403).json({
      message: "Incorrect Credentials",
    });
  }
};

// get All todos specific user
app.post("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId,
  });
  res.json({
    "Your Todos": todos,
  });
});

// create a todo for specific user
app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;
  await TodoModel.create({
    title,
    done,
  });
  res.json({
    message: "Todo Added !",
  });
});

app.listen(3001);
