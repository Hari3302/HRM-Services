const express = require("express");
const nameController = require("../Controller/nameController");
require("dotenv").config();
const router = express.Router();
router.get(process.env.BASE_COMP_DBCOLLECTION_URI, nameController.getAllCompDBCollection);
router.get(process.env.BASE_COMP_DBCOLLECTION_URI +"/emai/getone/:company_emailid", nameController.getOneCompDBCollection);
router.get(process.env.BASE_COMP_DBCOLLECTION_URI +"/:company_name", nameController.getCompNameDBCollection);
router.post(process.env.BASE_COMP_DBCOLLECTION_URI, nameController.save);
router.put(process.env.BASE_COMP_DBCOLLECTION_URI+"/:company_name", nameController.updatebyID)
router.delete(process.env.BASE_COMP_DBCOLLECTION_URI+"/delete"+"/:company_name", nameController.deletebyID)
 
module.exports = router;