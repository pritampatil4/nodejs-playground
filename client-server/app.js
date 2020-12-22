var http = require("http");

var server = http.createServer(function (req, res) {
  console.log("request was made to" + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from server!");
});

server.listen(3000);
console.log("listening on port 3000");
