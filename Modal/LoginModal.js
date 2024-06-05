const mongoose = require("mongoose");
require("dotenv").config();
module.exports = new mongoose.model(
  "loginDetails",
  new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId  },
    user_type:{type:String},
    user_name: { type: String,unique:true, required: true  },
    phone_number:{type:Number,required: true},
    emailid:{type:String,required:true,unique: true},
    password:{type:String,required: true},
    
  })
);