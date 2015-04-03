define(['underscore', 'backbone', 'jquery', 'text!templates/pageTemplate.html'], function(_, Backbone, $, pageTemplate) {
    var PageView = Backbone.View.extend({
        initialize: function(options) {
            this.options = options;
            this.render();
        },
        el: $('#content'),
        render: function() {
            var compiledTemplate = _.template(pageTemplate, {data: this.options});
            $(this.el).html(compiledTemplate);
        }
    });

    return PageView;
});