define(['underscore', 'backbone', 'models/nav'], function(_, Backbone, Nav) {
	var Navs = Backbone.Collection.extend({
		model: Nav,
		url: '/json/nav.json'
	});
	return Navs;
});