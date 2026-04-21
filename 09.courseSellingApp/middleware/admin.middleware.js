const jwt = require("jsonwebtoken");
const {JWT_ADMIN_SECRET} = require("../config/config.js")



function adminMiddileware (req, res, next) {
    const token = req .headers.token;
    const verifiedUser = jwt.verify(token , JWT_ADMIN_SECRET);
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
    adminMiddileware : adminMiddileware
}