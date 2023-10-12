const http = require('http');
const app = require('./app.js');

const port = process.env.PORT || 3000;

const server = http.createServer();

server.listen(port);//start lestning in the port 