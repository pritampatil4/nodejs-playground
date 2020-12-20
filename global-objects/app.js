console.log("Console.log global object");

// setTimeout(function() {
//     console.log('2 seconds have passed')
// }, 2000);

var time = 0;
var timer = setInterval(function () {
  time += 2;
  console.log(time + " seconds have passed");
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);

//Node can tell us which directory/file we are
console.log(__dirname);
console.log(__filename);
