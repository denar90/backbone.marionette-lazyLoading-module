define(['app',
		'lazyLoading/views/listView',
		'lazyLoading/collections/itemsCollection'], function(App, ListView, ListCollection) {

	App.module("LazyLoading", function(LazyLoading, App, Backbone, Marionette) {
		LazyLoading.Controller = Marionette.Controller.extend({
			getDataScrollFlag: true,

			initialize: function(options) {
				var self = this;

				$(window).on('scroll', function() {
					if (self.getDataScrollFlag) {
						if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
							self.fetchData();
						}
					}
				});
			},

			/**
			 * Fetch data
			 * @public
			 * @returns {*}
			 * @throw Error data was not get
			 */
			fetchData: function() {
				var self = this,
					dataCollection = new ListCollection();

				dataCollection.fetch({
					success: function(collection, response, options) {
						var listView = new ListView({ collection: collection });
						LazyLoading.moduleRegion.$el.append(listView.render().el);
						LazyLoading.offset += LazyLoading.limit;

						if (response.length < LazyLoading.limit) {
							self.getDataScrollFlag = false;
						} else {
							self.getDataScrollFlag = true;
						}
					},
					error: function() {
						throw new Error ('Couldn\'t get data for collection');
					}
				});
			}
		});
	});

	return new App.LazyLoading.Controller();
});