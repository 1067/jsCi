define(['models/todo'], function (Model) {
	return function () {
		var models = [];

		this.post = function (title) {
			var model = new Model();
			model.setTitle(title);

			models.push(model);
		};

		this.get = function (index) {
			if (index === undefined) {
				return models;
			}

			return models[index];
		};

		this.put = function (index, value) {
			models[index] = value;
		};

		this.delete = function (index) {
			models.slice(index, 1);
		};
	};
});