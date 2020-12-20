var fs = require("fs");

fs.mkdirSync("stuff", function () {
  fs.writeFileSync("./stuff/writeMe.txt", "Written in directory and file");
});

//Remove directory, but first need to remove file iside dir
