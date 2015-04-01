define(['underscore', 'backbone'], function(_, Backbone) {
	var Nav = Backbone.Model.extend({
		defaults: {
	      link: "Harry Potter"
	    }
	});

	return Nav;
});