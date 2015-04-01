define(['underscore', 'backbone', 'jquery', 'collections/navs', 'text!templates/navbarTemplate.html'], function(_, Backbone, $, Navs, navbarTemplate) {
    var NavView = Backbone.View.extend({
        el: $('#container'),

        render: function() {
            var compiledTemplate = _.template(navbarTemplate);
            $("#container").html(compiledTemplate);
        }
    });

    return NavView;
});