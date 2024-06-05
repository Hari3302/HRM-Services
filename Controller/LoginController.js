const mongoose = require("mongoose");
const loginModel = require("../Modal/LoginModal");
// const DaoUtils = require("../Utils/DaoUtils");
//const EmailUtils = require("../Utils/EmailUtils");
module.exports = {
  save: (req, res) => {
    const dBcollection = new loginModel({
    
      _id: new mongoose.Types.ObjectId(),
      user_name:req.body.user_name,
      emailid:req.body.emailid,
      user_type:req.body.user_type,
      password:req.body.password,
      phone_number:req.body.phone_number
      
    });

    // dBcollection .save(req, res, dBcollection, null, null, (result) => {
    // //   EmailUtils.sendSeekerRegisterMail(result);
    // });

   dBcollection.save().then((result)=>
   {res.status(201).send(result)

   })
{}
  },

  getAllDBCollection: async(req, res) => {
    
    //console.log("first",listingquery)
    await nameModel.find().then(data => {
        if (!data || data.length === 0) {
            return res.status(404).json({ status:404,message: "No data found" });
        }
        res.status(200).json(data);
    }).catch(error => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    });
},
getOneDBCollection: async(req, res) => {
  const listingQuery = {emailid:req.params.emailid};
  console.log("second",listingQuery)
  await loginModel.findOne(listingQuery).then(data => {
      if (!data || data.length === 0) {
          return res.status(404).json({ status:404,message: "No data found" });
      }
      res.status(200).json(data);
  }).catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  });
},
getNameDBCollection: async(req, res) => {
  const listingQuery = {user_name:req.params.user_name};
  console.log("first",listingQuery)
  await loginModel.findOne(listingQuery).then(data => {
      if (!data || data.length === -1) {
          return res.status(404).json({ status:404,message: "No data found" });
      }
      res.status(200).json(data);
  }).catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  });
},
updatebyID:async(req,res)=>{
  const listingQuery = {full_name:req.params.full_name};
  const newdata = req.body;
  console.log("req",newdata,listingQuery)
  try{
    const data = await loginModel.updateOne(listingQuery,newdata,{new:true});
    if(data.modifiedCount > 0){
      res.status(200).json(data)
    }else{
      res.status(204).json("no content")
    }
  }catch(err){
    res.status(500).json("internal server error")
  }


},
deletebyID:async(req,res)=>{
  const listingQuery = {_id:req.params.user_name};
  console.log("req",listingQuery)
  try{
    const data = await loginModel.deleteOne(listingQuery);
    if(data.deletedCount > 0){
      res.status(200).json(data)
    }else{
      res.status(204).json("no content")
    }
  }catch(err){
    res.status(500).json("internal server error")
  }
}
}