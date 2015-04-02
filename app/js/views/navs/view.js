define(['underscore', 'backbone', 'jquery', 'models/nav', 'text!templates/navbarTemplate.html', 'bootstrap'], function(_, Backbone, $, NavModel,navbarTemplate) {
    $(function() {
        $('.navbar').dropdown();
    });

    var NavView = Backbone.View.extend({
        el: $('body'),
        render: function() {
            this.model = new NavModel();
            var that = this;
            this.model.fetch().done(function() {
                var compiledTemplate = _.template(navbarTemplate, {model: that.model.toJSON()});
                $(that.el).html(compiledTemplate);
            });
        },

        events: {
            'click .navbar li': 'changeActiveTab',
            'blur .navbar': 'removeActive'
        },

        changeActiveTab: function(ev) {
            $('.navbar li').removeClass('active');
            $(ev.target).parent().addClass('active');
        },

        removeActive: function() {
            $('.navbar li').removeClass('active');
        }
    });

    return NavView;
});