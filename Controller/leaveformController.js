const mongoose = require("mongoose");
const leaveformModel = require("../Modal/leaveformModal");
module.exports = {
  save: (req, res) => {
    const leaveformdBcollection = new leaveformModel({
      _id: new mongoose.Types.ObjectId(),
      leavefrom:req.body.leavefrom,
      leaveto:req.body.leaveto,
      reason_of_leave:req.body.reason_of_leave,
      type_of_leave:req.body.type_of_leave,
      user_name:req.body.user_name,
      user_type:req.body.user_type,
    });

    // dBcollection .save(req, res, dBcollection, null, null, (result) => {
    // //   EmailUtils.sendSeekerRegisterMail(result);
    // });

   leaveformdBcollection.save().then((result)=>
   {res.status(201).send(result)

   })
{}
  },

  getAllleaveformdBcollection: async(req, res) => {
    
    //console.log("first",listingquery)
    await leaveformModel.find().then(data => {
        if (!data || data.length === 0) {
            return res.status(404).json({ status:404,message: "No data found" });
        }
        res.status(200).json(data);
    }).catch(error => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    });
},
getOneleaveformdBcollection: async(req, res) => {
  const listingQuery = {user_name:req.params.user_name};
  console.log("second",listingQuery)
  await leaveformModel.findOne(listingQuery).then(data => {
      if (!data || data.length === 0) {
          return res.status(404).json({ status:404,message: "No data found" });
      }
      res.status(200).json(data);
  }).catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  });
},


getleaveformdDBCollection: async(req, res) => {
  const listingQuery = {user_name:req.params.user_name};
  console.log("first",listingQuery)
  await leaveformModel.findOne(listingQuery).then(data => {
      if (!data || data.length === -1) {
          return res.status(404).json({ status:404,message: "No data found" });
      }
      res.status(200).json(data);
  }).catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  });
},
}