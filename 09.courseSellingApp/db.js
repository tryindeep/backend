const mongoose = require("mongoose");
const {Schema} = mongoose;


const userSchema = new Schema ({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true
    }
})
const adminSchema = new Schema ({
   
})
const courseSchema = new Schema ({

})
  
const purchaseSchema = new Schema ({
   
})

const UserModel = mongoose.model("Users", userSchema )
const AdminModel = mongoose.model("Admins", adminSchema )
const CourseModel = mongoose.model("Courses", courseSchema)
const PurchaseModel = mongoose.model("Purchases" , purchaseSchema );

module.exports = {
    UserModel : UserModel,
    AdminModel : AdminModel,
    CourseModel : CourseModel,
    PurchaseModel : PurchaseModel
}