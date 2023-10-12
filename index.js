//hendling requests 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();// loads environment variables from a .env file that you create and adds them to the process.env object which is then made available to the application.
// app.use((req, res, next)=>{
//     res.status(200).json({
//         message: 'it works'//passing a js object
//     });//send a  json response 
// });//
app.use(bodyParser.json());
// module.exports = app;