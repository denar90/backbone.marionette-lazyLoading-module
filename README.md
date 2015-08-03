#Backbone.marionette lazy loading module

Lazy loading data module for backbone.marionette

##Getting started

###Quick start

* Clone the repository: `git clone https://github.com/denar90/backbone.marionette-lazyLoading-module.git`
* Add dependency into your `bower.json` file and run `bower install`

##Usage
* Configure your requirejs file

````javascript
	require.config({
    	...
    	paths: {
    		...
    		app: 'path-to-app-file',
    		lazyLoading: 'path-to-module' // example 'modules/backbone.marionette-lazyLoading-module/'
    		...
    	}
    	...
    });
````

* Include and run module

````javascript
	//for example
	define(['marionette', 'lazyLoading/lazyLoading'], function(Marionette, lazyLoading) {
    	var App = new Marionette.Application();

    	App.addRegions({
    		mainRegion: '#app'
    	});

    	App.on("start", function() {
    		if (Backbone.history) {
    			Backbone.history.start();
    			lazyLoading.start({
    				moduleRegion: App.mainRegion,
    				getDataUrl: 'getData.php',
    				offset: 0,
    				limit: 10
    			});
    		}
    	});

    	return App;
    });
````

##Options

#### moduleRegion
* type: Object

Required param.

Region where data will be past

#### getDataUrl
* type: String
* default: ''

Url to getting data from server. Module automatically will be build url with `offset` and `limit`.

#### offset
* type: String
* default: 0

Data offset. Says server from what number get data


#### limit
* type: String
* default: 10

Data limit for one request.

#### listTemplate
* type: string
* default: ''

Template for all list of data. It's kind of container. If `listTemplate` isn't set module will use default.

#### itemTemplate
* type: string
* default: ''

Template for each item. If `itemTemplate` isn't set module will use default.
