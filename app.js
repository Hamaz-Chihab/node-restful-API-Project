//hendling requests 
const express = require('express');
const app = express();


app.use((req, res, next)=>{
    res.status(200).json({
        message: 'it works'//passing a js object
    });//send a  json response 
});//

module.exports = app;