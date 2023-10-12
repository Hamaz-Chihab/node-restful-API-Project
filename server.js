const http = require('http');
const app = require('./index.js');//request handler 

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);//start lestning in the port 