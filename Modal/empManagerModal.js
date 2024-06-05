const mongoose = require("mongoose");
require("dotenv").config();
module.exports = new mongoose.model(
  "empmanagerdetails",
  new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId  },
    empmanager_name:{type:String},
    user_type:{type:String},
    user_name: { type: String,unique:true, required: true  },
    phone_number:{type:Number,required: true},
    emailid:{type:String,required:true,unique: true},
    password:{type:String,required: true},
    empmanager_sslc:{type:String},
    empmanager_hsc:{type:String},
    empmanager_degree:{type:String},
    empmanager_experience:{type:String}
  })
);