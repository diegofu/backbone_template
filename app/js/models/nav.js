define(['underscore', 'backbone'], function(_, Backbone) {
    var Nav = Backbone.Model.extend({
        defaults: {
            'type': 'navbar-static-top',
            'brand': 'brand',
        },
        url: '/json/nav.json',
    });

    return Nav;
});