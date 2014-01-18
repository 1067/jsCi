define(function () {
	return function (listeners) {
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
});