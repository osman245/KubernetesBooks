// import libraries
const http = require("http");
const os = require("os");

console.log("Kubia server starting...");

//
var handler = function (request, response) {
  console.log("Received request from " + request.connection.remoteAddress); // log the clients ip address
  response.writeHead(200); //server responds with a response status code 200 OK
  response.end("You've hit " + os.hostname() + "\n");
};
// The createServer method creates a server on your computer:
var www = http.createServer(handler);
// start the server on port 8080
www.listen(8080);
//pg60...
