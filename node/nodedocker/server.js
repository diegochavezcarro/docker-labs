const http = require('http');
const os = require('os');
const express = require('express');

console.log("Server starting...");
var handler = function(request, response) {
	console.log("Received request from " + request.connection.remoteAddress);
	console.log('Received request for URL: ' + request.url);
	response.writeHead(200);
	response.end("You've hit " + os.hostname() + "\n");
};
const app = express();
app.get('/', handler);
app.listen(8080);






