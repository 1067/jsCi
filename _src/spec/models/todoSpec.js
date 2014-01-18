function Todo(listeners) {
	listeners = listeners || {};
	var title = "";

	this.setTitle = function (value) {
		title = value;

		if (typeof listeners.title === "function") {
			listeners.title(value);
		}
	};

	this.getTitle = function () { return title; };
};

describe("models/todo", function () {
	var todo;

	it("should get exatly value that was set to title", function () {
		var value = {"it's": "my way"};
		var todo = new Todo();
		todo.setTitle(value);

		var actual = todo.getTitle();

		expect(actual).toEqual(value);
	});

});

describe("this user story should failed", function () {
	it("should failed anywhere", function () {
		expect(true).toEqual(false);
	});
});