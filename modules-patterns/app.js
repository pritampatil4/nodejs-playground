// const { counter, adder } = require('./modules');
var modules = require("./modules");

console.log(modules.counter(["hello", "world"]));

console.log(modules.adder(1, 2));
