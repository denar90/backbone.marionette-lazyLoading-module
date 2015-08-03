/**
 * List view module
 * @exports app
 * @exports handlebars
 * @exports lazyLoading/helpers/viewHelper
 * @exports text!lazyLoading/templates/item.hbs
 *
 * @author Denysov Artem
 * @link https://github.com/denar90
 */

define(['app',
		'handlebars',
		'lazyLoading/views/itemView',
		'lazyLoading/helpers/viewHelper',
		'text!lazyLoading/templates/list.hbs'], function(App, Handlebars, ItemView, ViewHelper, listTemplate) {

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