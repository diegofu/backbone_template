define(['jquery', 'underscore', 'backbone', ''], function($, _, Backbone) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'*actions': 'defaultRoute'
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;

		app_router.on('route:defaultRoute', function (actions) {
			console.log(actions);
		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});