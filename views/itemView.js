/**
 * Item view module
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
		'lazyLoading/helpers/viewHelper',
		'text!lazyLoading/templates/item.hbs'], function(App, Handlebars, viewHelper, itemTemplate) {

	App.module("LazyLoading.View", function(View, App, Backbone, Marionette) {
		View.Item = Marionette.ItemView.extend({
			template: function(serialized_model) {
				var template = viewHelper.getTemplate(itemTemplate, App.LazyLoading.itemTemplate),
					handlebarsTemplate = Handlebars.compile(template);
				return handlebarsTemplate(serialized_model);
			}
		});
	});

	return App.LazyLoading.View.Item;
});