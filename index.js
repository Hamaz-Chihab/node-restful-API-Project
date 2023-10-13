//hendling requests 
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


require('dotenv').config();// loads environment variables from a .env file that you create and adds them to the process.env object which is then made available to the application.
require('./db.js');//imoprt the Data Base 
const PORT = 8000;

const userRoutes = require('./routes/userRoutes');//import the user routes 
app.use('/users',userRoutes);


const taskRoutes = require('./routes/taskRoutes.js');//import the user routes 
app.use('/task',taskRoutes);


app.get('/', (req, res, next)=>{
    res.json({
        message :'Task Manager API is working'
    });
});



app.listen(PORT, ()=>{
    console.log('server is running on port ${PORT}')
});//start lestning in the port 