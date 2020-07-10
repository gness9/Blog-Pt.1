//require('./src/database');
require('./blog/src/templates')
const http = require('http');
const handleRequest = require('./src/handle-request');
require('./src/database');
//require('./src/templates');


console.log("ERRR");
const port = 3000;

// Create the server
var server = http.createServer(handleRequest);

// Start listening for requests
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});