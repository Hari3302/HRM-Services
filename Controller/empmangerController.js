const mongoose = require("mongoose");
const empmanagerModel = require("../Modal/empManagerModal");
// const DaoUtils = require("../Utils/DaoUtils");
//const EmailUtils = require("../Utils/EmailUtils");
module.exports = {
  save: (req, res) => {
    const empmanagerdBcollection = new empmanagerModel({
    
      _id: new mongoose.Types.ObjectId(),
      empmanager_name:req.body.empmanager_name,
      user_name:req.body.user_name,
      user_type:req.body.user_type,
      emailid:req.body.emailid,
      password:req.body.password,
      phone_number:req.body.phone_number,
      empmanager_sslc:req.body.empmanager_sslc,
      empmanager_hsc:req.body.empmanager_hsc,
      empmanager_degree:req.body.empmanager_degree,
      empmanager_experience:req.body.empmanager_experience
      
    });

    // dBcollection .save(req, res, dBcollection, null, null, (result) => {
    // //   EmailUtils.sendSeekerRegisterMail(result);
    // });

   empmanagerdBcollection.save().then((result)=>
   {res.status(201).send(result)

   })
{}
  },

  getAllempmanagerDBCollection: async(req, res) => {
    
    //console.log("first",listingquery)
    await empmanagerModel.find().then(data => {
        if (!data || data.length === 0) {
            return res.status(404).json({ status:404,message: "No data found" });
        }
        res.status(200).json(data);
    }).catch(error => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    });
},
getOneempmanagerDBCollection: async(req, res) => {
  const listingQuery = {emailid:req.params.emailid};
  console.log("second",listingQuery)
  await empmanagerModel.findOne(listingQuery).then(data => {
      if (!data || data.length === 0) {
          return res.status(404).json({ status:404,message: "No data found" });
      }
      res.status(200).json(data);
  }).catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  });
},


getempmanagerNameDBCollection: async(req, res) => {
  const listingQuery = {user_name:req.params.user_name};
  console.log("first",listingQuery)
  await empmanagerModel.findOne(listingQuery).then(data => {
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
