define(['jquery', 'underscore', 'backbone', 'views/pages/view', 'views/navs/view'], function($, _, Backbone, PageView, NavView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'*actions': 'defaultRoute'
		},
		initialize: function() {
			this.navView = new NavView();
    		this.navView.render();
		},
		defaultRoute: function(path) {
			if(path == undefined) {
				var pageView = new PageView({'path': 'home'});
			} else {
				var pageView = new PageView({'path': path});				
			}
			this.navView.selectMenuItem(path);
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});