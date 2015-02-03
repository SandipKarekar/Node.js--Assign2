
var hobby = "Multiplying";
var status = "Single";

console.log('Loading multiplier module');

var timesTwo = function (x) {
	return x * 2;
}
var timesThree = function (x) {
	return x * 3;
}

exports.hobby = hobby;
exports.timesTwo = timesTwo;
exports.timesThree = timesThree;