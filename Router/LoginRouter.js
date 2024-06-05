const express = require("express");
const loginController = require("../Controller/LoginController");
require("dotenv").config();
const router = express.Router();
router.get(process.env.BASE_LOGIN_DBCOLLECTION_URI, loginController.getAllDBCollection);
router.get(process.env.BASE_LOGIN_DBCOLLECTION_URI +"/emai/getone/:emailid", loginController.getOneDBCollection);
router.get(process.env.BASE_LOGIN_DBCOLLECTION_URI +"/:user_name",loginController.getNameDBCollection);
router.post(process.env.BASE_LOGIN_DBCOLLECTION_URI, loginController.save);
router.put(process.env.BASE_LOGIN_DBCOLLECTION_URI+"/:user_name", loginController.updatebyID)
router.delete(process.env.BASE_LOGIN_DBCOLLECTION_URI+"/delete"+"/:user_name", loginController.deletebyID)
 
module.exports = router;