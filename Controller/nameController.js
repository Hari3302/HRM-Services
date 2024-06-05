const mongoose = require("mongoose");
const nameModel = require("../Modal/nameModal");
// const DaoUtils = require("../Utils/DaoUtils");
//const EmailUtils = require("../Utils/EmailUtils");
module.exports = {
  save: (req, res) => {
    const compDBcollection = new nameModel({
      _id: new mongoose.Types.ObjectId(),
      company_name:req.body.company_name,
      company_emailid:req.body.company_emailid,
      no_of_employee:req.body.no_of_employee,
      phnumber:req.body.phnumber,
      
    });

    // dBcollection .save(req, res, dBcollection, null, null, (result) => {
    // //   EmailUtils.sendSeekerRegisterMail(result);
    // });

    compDBcollection.save().then((result)=>


    
   {res.status(201).send(result)

   })
{}
  },

  getAllCompDBCollection: async(req, res) => {
    
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
getOneCompDBCollection: async(req, res) => {
  const listingQuery = {company_emailid:req.params.company_emailid};
  console.log("second",listingQuery)
  await nameModel.findOne(listingQuery).then(data => {
      if (!data || data.length === 0) {
          return res.status(404).json({ status:404,message: "No data found" });
      }
      res.status(200).json(data);
  }).catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  });
},
getCompNameDBCollection: async(req, res) => {
  const listingQuery = {company_name:req.params.company_name};
  console.log("first",listingQuery)
  await nameModel.findOne(listingQuery).then(data => {
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
  const listingQuery = {_id:req.params.company_name};
  const newdata = req.body;
  console.log("req",newdata,listingQuery)
  try{
    const data = await nameModel.updateOne(listingQuery,newdata,{new:true});
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
  const listingQuery = {_id:req.params.company_name};
  console.log("req",listingQuery)
  try{
    const data = await nameModel.deleteOne(listingQuery);
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


