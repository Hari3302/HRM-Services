const express = require("express");
const hrController = require("../Controller/hrController");
require("dotenv").config();
const router = express.Router();
router.get(process.env.BASE_HR_DBCOLLECTION_URI, hrController.getAllHrDBCollection);
router.get(process.env.BASE_HR_DBCOLLECTION_URI +"/emai/getone/:emailid", hrController.getOneHrDBCollection);
router.get(process.env.BASE_HR_DBCOLLECTION_URI +"/:user_name",hrController.getHrNameDBCollection);
router.post(process.env.BASE_HR_DBCOLLECTION_URI, hrController.save);
// router.put(process.env.BASE_HR_DBCOLLECTION_URI+"/:user_name", hrController.updatebyID)
// router.delete(process.env.BASE_HR_DBCOLLECTION_URI+"/delete"+"/:user_name", hrController.deletebyID)
module.exports = router;