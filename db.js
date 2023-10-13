// mongodb data file 
const mongoose = require ('mongoose');
require('dotenv').config();//import from 

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(MONGO_URL,{
    dbName : DB_NAME
}).then(
    ()=>{
        console.log('connected to Data Base');
    }
).catch((err)=>{
    console.log('ERROR connecting to Data Base'+ err);
});