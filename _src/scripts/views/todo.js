define(["jquery"], function (jq) {
	return {
		render: function (models) {
			var list = jq("#todo-list");
			if (list.length === 0) {
				list = jq("<ol>");
				list.appendTo(jq("body"));
			}

			list.children().remove();

			jq.each(models, function (index, model) {
				list.append(jq("<li>" + model.getTitle() + "</li>"));
			});
		}
	};	
});