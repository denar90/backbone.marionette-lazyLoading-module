/**
 * Collection module
 * @exports app
 * @exports backbone
 * @exports lazyLoading/models/itemModel
 *
 * @author Denysov Artem
 * @link https://github.com/denar90
 */

define(['app',
		'backbone',
		'lazyLoading/models/itemModel'], function(App, Backbone, ItemModel) {

	App.module("LazyLoading", function(LazyLoading, App, Backbone, Marionette) {
		LazyLoading.Collection = Backbone.Collection.extend({
			url: function() {
				return LazyLoading.getDataUrl + '?offset=' + LazyLoading.offset + '&limit=' +  LazyLoading.limit;
			},
			model: ItemModel,

			parse: function(response, options) {
				return response;
			}
		});
	});

	return App.LazyLoading.Collection;
});