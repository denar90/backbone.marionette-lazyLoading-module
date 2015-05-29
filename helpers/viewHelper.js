define(['app'], function(App) {

	App.module("LazyLoading.View", function(View, App, Backbone, Marionette) {
		View.Helper = Marionette.Object.extend({

			/**
			 * Get template
			 * @public
			 * @param {string} localTemplate Template which uses by default
			 * @param {string} customTemplate Template which was set in settings
			 * @returns {string}
			 */
			getTemplate: function(localTemplate, customTemplate) {
				if (customTemplate.length > 0) {
					return App.LazyLoading.template;
				} else {
					return localTemplate;
				}
			}
		});
	});

	return new App.LazyLoading.View.Helper();
});