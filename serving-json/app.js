var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  console.log("request was made to" + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  var myObj = {
    firstName: "Aadya",
    lastName: "Solapure",
    place: "India",
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000);
console.log("listening on port 3000");
