
var hobby = "Multiplying";
var status = "Single";

console.log('Loading multiplier module');

var timesTwo = function (x) {
	return x * 2;
}
var timesThree = function (x) {
	return x * 3;
}


module.exports = {
	timesTwo : timesTwo,
	timesFour : function(x) { 
      return x * 4;
	}
}