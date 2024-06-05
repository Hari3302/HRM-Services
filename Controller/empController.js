const mongoose = require("mongoose");
const empModel = require("../Modal/empModal");
// const DaoUtils = require("../Utils/DaoUtils");
//const EmailUtils = require("../Utils/EmailUtils");
module.exports = {
  save: (req, res) => {
    const empdBcollection = new empModel({
    
      _id: new mongoose.Types.ObjectId(),
      emp_name:req.body.emp_name,
      user_name:req.body.user_name,
      user_type:req.body.user_type,
      emailid:req.body.emailid,
      password:req.body.password,
      phone_number:req.body.phone_number,
      emp_sslc:req.body.emp_sslc,
      emp_hsc:req.body.emp_hsc,
      emp_degree:req.body.emp_degree,
      emp_experience:req.body.emp_experience
      
    });

    // dBcollection .save(req, res, dBcollection, null, null, (result) => {
    // //   EmailUtils.sendSeekerRegisterMail(result);
    // });

   empdBcollection.save().then((result)=>
   {res.status(201).send(result)

   })
{}
  },

  getAllempDBCollection: async(req, res) => {
    
    //console.log("first",listingquery)
    await empModel.find().then(data => {
        if (!data || data.length === 0) {
            return res.status(404).json({ status:404,message: "No data found" });
        }
        res.status(200).json(data);
    }).catch(error => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    });
},
getOneempDBCollection: async(req, res) => {
  const listingQuery = {emailid:req.params.emailid};
  console.log("second",listingQuery)
  await empModel.findOne(listingQuery).then(data => {
      if (!data || data.length === 0) {
          return res.status(404).json({ status:404,message: "No data found" });
      }
      res.status(200).json(data);
  }).catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  });
},


getempNameDBCollection: async(req, res) => {
  const listingQuery = {user_name:req.params.user_name};
  console.log("first",listingQuery)
  await empModel.findOne(listingQuery).then(data => {
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
