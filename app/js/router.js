define(['jquery', 'underscore', 'backbone', 'views/pages/view'], function($, _, Backbone, PageView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
            '': 'index',
			'*actions': 'defaultRoute'
		},
		defaultRoute: function(path) {
			var pageView = new PageView({'link': path});
		},
	});

	var initialize = function() {
		var app_router = new AppRouter;
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});