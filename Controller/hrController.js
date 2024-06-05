const mongoose = require("mongoose");
const hrModel = require("../Modal/hrModal");
// const DaoUtils = require("../Utils/DaoUtils");
//const EmailUtils = require("../Utils/EmailUtils");
module.exports = {
  save: (req, res) => {
    const hrdBcollection = new hrModel({
    
      _id: new mongoose.Types.ObjectId(),
      hr_name:req.body.hr_name,
      user_name:req.body.user_name,
      user_type:req.body.user_type,
      emailid:req.body.emailid,
      password:req.body.password,
      phone_number:req.body.phone_number,
      company_name:req.body.company_name,
      hr_sslc:req.body.hr_sslc,
      hr_hsc:req.body.hr_hsc,
      hr_degree:req.body.hr_degree,
      hr_experience:req.body.hr_experience
      
    });

    // dBcollection .save(req, res, dBcollection, null, null, (result) => {
    // //   EmailUtils.sendSeekerRegisterMail(result);
    // });

   hrdBcollection.save().then((result)=>
   {res.status(201).send(result)

   })
{}
  },

  getAllHrDBCollection: async(req, res) => {
    
    //console.log("first",listingquery)
    await hrModel.find().then(data => {
        if (!data || data.length === 0) {
            return res.status(404).json({ status:404,message: "No data found" });
        }
        res.status(200).json(data);
    }).catch(error => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    });
},
getOneHrDBCollection: async(req, res) => {
  const listingQuery = {emailid:req.params.emailid};
  console.log("second",listingQuery)
  await hrModel.findOne(listingQuery).then(data => {
      if (!data || data.length === 0) {
          return res.status(404).json({ status:404,message: "No data found" });
      }
      res.status(200).json(data);
  }).catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  });
},


getHrNameDBCollection: async(req, res) => {
  const listingQuery = {user_name:req.params.user_name};
  console.log("first",listingQuery)
  await hrModel.findOne(listingQuery).then(data => {
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
