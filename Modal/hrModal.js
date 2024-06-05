const mongoose = require("mongoose");
require("dotenv").config();
module.exports = new mongoose.model(
  "hrdetails",
  new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId  },
    hr_name:{type:String},
    user_name: { type: String,unique:true, required: true  },
    user_type:{type:String},
    phone_number:{type:Number,required: true},
    emailid:{type:String,required:true,unique: true},
    password:{type:String,required: true},
    company_name:{type:String},
    hr_sslc:{type:String},
    hr_hsc:{type:String},
    hr_degree:{type:String},
    hr_experience:{type:String}
  })
);