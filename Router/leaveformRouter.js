const express = require("express");
const leaveformController = require("../Controller/leaveformController");
require("dotenv").config();
const router = express.Router();
router.get(process.env.BASE_leaveform_DBCOLLECTION_URI, leaveformController.getAllleaveformdBcollection);
// router.get(process.env.BASE_leaveform_DBCOLLECTION_URI +"/emai/getone/:emailid", leaveformController.getOneleaveformDBCollection);
router.get(process.env.BASE_leaveform_DBCOLLECTION_URI +"/:user_name",leaveformController.getOneleaveformdBcollection);
router.post(process.env.BASE_leaveform_DBCOLLECTION_URI, leaveformController.save);
// router.put(process.env.BASE_leaveform_DBCOLLECTION_URI+"/:user_name", leaveformController.updatebyID)
// router.delete(process.env.BASE_leaveform_DBCOLLECTION_URI+"/delete"+"/:user_name", leaveformController.deletebyID)
module.exports = router;