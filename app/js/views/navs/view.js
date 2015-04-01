define(['underscore', 'backbone', 'jquery', 'collections/navs', 'text!templates/navbarTemplate.html', 'bootstrap'], function(_, Backbone, $, NavsCollection, navbarTemplate) {
    $(function() {
        $('.navbar').dropdown();
    });

    var NavView = Backbone.View.extend({
        el: $('#container'),
        render: function() {
            this.collection = new NavsCollection();
            var that = this;
            this.collection.fetch().done(function() {
                var compiledTemplate = _.template(navbarTemplate, {collection: that.collection.toJSON()});
                $("#container").html(compiledTemplate);
            });
        }
    });

    return NavView;
});