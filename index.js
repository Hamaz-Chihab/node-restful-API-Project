//hendling requests 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT 

require('dotenv').config();// loads environment variables from a .env file that you create and adds them to the process.env object which is then made available to the application.

app.get('/', (req, res, next)=>{
    res.json({
        message :'Task Manager API is working'
    });
});

app.use(bodyParser.json());
server.listen(PORT, ()=>{
    console.log('server is running on port ${PORT}')
});//start lestning in the port 