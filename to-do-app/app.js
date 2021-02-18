var express = require("express");
var todoController = require("./controllers/todoController.js");

var app = express();

//set up template engine
app.set("view engine", "ejs");

//static file
app.use(express.static("./public"));

//fire controller
todoController(app);

//listen to port
app.listen(3000, function () {
  console.log("listening on port: 3000");
});
