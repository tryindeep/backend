require('dotenv').config();
console.log(process.env.MONGO_URL);

const express =  require("express");
const  mongoose  = require("mongoose");
const app = express();
app.use(express.json());

// Routing in express , the express Router 
//Routers
const {userRouter} = require ("./routes/user.router.js");
const {courseRouter} = require("./routes/course.router.js");
const {adminRouter} = require("./routes/admin.router.js");

// learn Passport Auth

// version

app.use("/api/v1/user" , userRouter);
app.use('/api/v1/course' , courseRouter);
app.use('/api/v1/admin' , adminRouter);



async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("listing on Port 3000")
}
main();

