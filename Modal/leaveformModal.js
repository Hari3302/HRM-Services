const mongoose = require("mongoose");
require("dotenv").config();
module.exports = new mongoose.model(
  "leaveformdetails",
  new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId  },
    leavefrom:{type:String},
    leaveto:{type:String},
    user_type:{type:String},
    user_name: { type: String, required: true  },
    reason_of_leave:{type:String},
    type_of_leave:{type:String}
})
);