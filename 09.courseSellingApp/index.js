const express =  require("express");
const app = express();
app.use(express.json());


// Routing in express , the express Router 
//Routers
const {userRouter} = require ("./routes/user.js");
const {courseRouter} = require("./routes/course.js");
const {adminRouter} = require("./routes/admin.js");
// version
app.use("/api/v1/user" , userRouter);
app.use('/api/v1/course' , courseRouter);


app.listen(3000);
