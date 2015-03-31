define(['underscore', 'backbone'], function(_, Backbone) {
	var Nav = Backbone.Model.extend({
		defaults: {
	      name: "Harry Potter"
	    }
	});

	return Nav;
});