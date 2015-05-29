define(['app',
		'handlebars',
		'lazyLoading/views/itemView',
		'lazyLoading/helpers/viewHelper',
		'text!lazyLoading/templates/list.html'], function(App, Handlebars, ItemView, ViewHelper, listTemplate) {

	App.module("LazyLoading.View", function(View, App, Backbone, Marionette) {
		View.List = Marionette.CompositeView.extend({
			template: function() {
				var template = ViewHelper.getTemplate(listTemplate, App.LazyLoading.listTemplate);
				return Handlebars.compile(template);
			},
			childView: ItemView
		});
	});

	return App.LazyLoading.View.List;
});