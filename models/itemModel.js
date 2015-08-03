/**
 * Model module
 * @exports app
 *
 * @author Denysov Artem
 * @link https://github.com/denar90
 */

define(['app'], function(App) {

	App.module("LazyLoading", function(LazyLoading, App, Backbone, Marionette) {
		LazyLoading.Model = Backbone.Model.extend();
	});

	return App.LazyLoading.Model;
});