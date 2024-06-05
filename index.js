const express = require("express");
const dBCollectionRouter= require("./Router/nameRouter");
const loginRouter= require("./Router/LoginRouter");
const hrRouter=require("./Router/hrRouter")
const empRouter=require("./Router/empRouter")
const empmangerRouter=require("./Router/empmangerRouter")
const leaveformRouter=require("./Router/leaveformRouter")
// const a = require("./Router/nameRouter")
const initDb = require("./initDb");
const cors = require("cors");
const app = express();
app.use(express.urlencoded());
app.use(express.json());
var whitelist = [
  "http://localhost:3000",
  "http://localhost:3002",//0
  "http://localhost:8011",//1
  
    undefined,
  ];
app.use(
    cors({
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !==-1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );

app.use(process.env.BASE_URI,dBCollectionRouter);
app.use(process.env.BASE_URI,loginRouter);
app.use(process.env.BASE_URI,hrRouter);
app.use(process.env.BASE_URI,leaveformRouter);
app.use(process.env.BASE_URI,empRouter);
app.use(process.env.BASE_URI,empmangerRouter);
app.listen(process.env.PORT_NUM);


