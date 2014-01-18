define(['models/todo.list', 'views/todo'], function (List, view) {
	var list = new List();

	list.post("First task");
	list.post("Second Task");
	list.post("Therd Task");

	return {
		renderList : function () {
			view.render(list.get());
		}
	};
});