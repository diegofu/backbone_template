require.config({
  paths: {
    'jquery': '../components/jquery/dist/jquery',
    'underscore': '../components/underscore-amd/underscore',
    'backbone': '../components/backbone-amd/backbone',
    'text': '../components/text/text',
    'bootstrap': '../components/bootstrap/dist/js/bootstrap',
  },
  shim: {
  	'bootstrap': {
		deps: ['jquery']
  	}
  }
});

require(['underscore', 'backbone', 'router'], function(_, Backbone, Router) {
	Router.initialize();
});
