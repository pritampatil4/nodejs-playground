var express = require("express");
var app = express();

app.set('view engine', 'ejs'); 

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/home.html');
});

app.get("/contact", function (req, res) {
  res.render('contact');
});

app.get('/profile/:name', function(req, res) {
  var data = {'job': 'Engineer', 'city': 'Munich', 'hobbies': ['hiking', 'fishing', 'travelling']};
  res.render('profile', {person: req.params.name, data:data});
});

app.listen(3000, function () {
  console.log("Listening on port-3000");
});
