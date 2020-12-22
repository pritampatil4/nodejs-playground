var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  console.log("request was made to" + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/blah") {
    res.writeHead(200, { "Content-Type": "application/json" });
    var blahData = [
      { name: "John", age: 25 },
      { name: "Dave", age: 30 },
    ];
    res.end(JSON.stringify(blahData));
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

server.listen(3000);
console.log("listening on port 3000");
