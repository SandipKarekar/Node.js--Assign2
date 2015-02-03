var user = function(name) {
	this.name = name;
	var age = 8;

	this.sayHi = function () {
      return "hi, my name is " + name + ". I am " + age + " years old!";
	};
}

module.exports = user;