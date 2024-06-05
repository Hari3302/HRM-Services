const mongoose = require("mongoose");
require("dotenv").config();
module.exports = new mongoose.model(
  "students",
  new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId  },
    company_name: { type: String,unique:true, required: true  },
    phnumber:{type:Number,},
  company_emailid:{type:String,unique: true},
  no_of_employee:{type:String,}
  })
);

