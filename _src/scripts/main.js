require.config({
	map: {
		'*': { 'jquery': 'jquery-private'},
		'jquery-private': { 'jquery': 'jquery'}
	}
});

require(["controllers/todo"], function(controller, Model) {
	controller.renderList();
});

function Animal(name) {
	this.name = name;
}

Animal.prototype.speak = function() {
	console.log("My name is " + this.name);
};

function Cat(name, age) {
	Animal.call(this, name);
	this.age = age;
}

Cat.prototype = new Animal();

Cat.prototype.getAge = function () {
	return this.age;
};

