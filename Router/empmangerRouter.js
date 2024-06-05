const express = require("express");
const empmanagerController = require("../Controller/empmangerController");
require("dotenv").config();
const router = express.Router();
router.get(process.env.BASE_EMP_MANAGER_DBCOLLECTION_URI, empmanagerController.getAllempmanagerDBCollection);
router.get(process.env.BASE_EMP_MANAGER_DBCOLLECTION_URI +"/emai/getone/:emailid", empmanagerController.getOneempmanagerDBCollection);
router.get(process.env.BASE_EMP_MANAGER_DBCOLLECTION_URI +"/:user_name",empmanagerController.getempmanagerNameDBCollection);
router.post(process.env.BASE_EMP_MANAGER_DBCOLLECTION_URI, empmanagerController.save);
// router.put(process.env.BASE_EMP_MANAGER_DBCOLLECTION_URI+"/:user_name", empmanagerController.updatebyID)
// router.delete(process.env.BASE_EMP_MANAGER_DBCOLLECTION_URI+"/delete"+"/:user_name", empmanagerController.deletebyID)
module.exports = router;