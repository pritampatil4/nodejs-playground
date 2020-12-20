var counter = function (arr) {
  return "There are " + arr.length + " elements in this array";
};

module.exports.adder = function (a, b) {
  return `The addition is - ${a + b} `;
};

module.exports.counter = counter;

//module.exports = {counter, adder}
