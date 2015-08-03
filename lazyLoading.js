/**
 * LazyLoading module
 * @exports app
 *
 * @author Denysov Artem
 * @link https://github.com/denar90
 */

define(['app'], function(App) {
	return App.module("LazyLoading", function(LazyLoading, App, Backbone, Marionette) {

		_.extend(LazyLoading, {
			startWithParent: false,
			moduleRegion: null,
			getDataUrl: '',
			offset: 0,
			limit: 10,
			listTemplate: '',
			itemTemplate: ''
		});

		LazyLoading.on('start', function (options) {
			_.extend(LazyLoading, options);
			require(['lazyLoading/controllers/lazyLoadingController'], function(Controller) {
				Controller.fetchData();
			});
		});
	});
});