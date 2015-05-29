define(['app'], function(App) {

	App.module("LazyLoading", function(LazyLoading, App, Backbone, Marionette) {
		LazyLoading.Model = Backbone.Model.extend();
	});

	return App.LazyLoading.Model;
});