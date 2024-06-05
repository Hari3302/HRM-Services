const mongoose = require("mongoose");
require("dotenv").config();
module.exports = new mongoose.model(
  "empdetails",
  new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId  },
    emp_name:{type:String},
    user_type:{type:String},
    user_name: { type: String,unique:true, required: true  },
    phone_number:{type:Number,required: true},
    emailid:{type:String,required:true,unique: true},
    password:{type:String,required: true},
    emp_sslc:{type:String},
    emp_hsc:{type:String},
    emp_degree:{type:String},
    emp_experience:{type:String}
  })
);