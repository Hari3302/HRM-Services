const express = require("express");
const empController = require("../Controller/empController");
require("dotenv").config();
const router = express.Router();
router.get(process.env.BASE_emp_DBCOLLECTION_URI, empController.getAllempDBCollection);
router.get(process.env.BASE_emp_DBCOLLECTION_URI +"/emai/getone/:emailid", empController.getOneempDBCollection);
router.get(process.env.BASE_emp_DBCOLLECTION_URI +"/:user_name",empController.getempNameDBCollection);
router.post(process.env.BASE_emp_DBCOLLECTION_URI, empController.save);
// router.put(process.env.BASE_emp_DBCOLLECTION_URI+"/:user_name", empController.updatebyID)
// router.delete(process.env.BASE_emp_DBCOLLECTION_URI+"/delete"+"/:user_name", empController.deletebyID)
module.exports = router;