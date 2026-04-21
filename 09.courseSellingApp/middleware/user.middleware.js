const jwt = require("jsonwebtoken");
const {JWT_USER_SECRET} = require("../config/config.js")


function userMiddleware (req, res, next) {
    const token = req.headers.token;
    const verifiedUser = jwt.verify(token , JWT_USER_SECRET);
    if(verifiedUser){
        req.userId = verifiedUser.id;
        next();
    }else {
    res.staus(403).json({
      message: "Incorrect Credentials",
    });
  }
}

module.exports = {
    userMiddleware : userMiddleware
}