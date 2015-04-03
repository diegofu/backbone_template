define(['underscore', 'backbone', 'jquery', 'models/nav', 'views/pages/view', 'text!templates/navbarTemplate.html', 'bootstrap'], function(_, Backbone, $, NavModel, PageView, navbarTemplate) {
    $(function() {
        $('.navbar').dropdown();
    });

    var NavView = Backbone.View.extend({
        el: $('#navbar'),
        render: function() {
            this.model = new NavModel();
            var that = this;
            this.model.fetch().done(function() {
                var compiledTemplate = _.template(navbarTemplate, {model: that.model.toJSON()});
                $(that.el).html(compiledTemplate);
            });
        },
        selectMenuItem: function(menuItem) {
        	console.log($('#navbar li.' + menuItem));
        	$('#navbar li').removeClass('active');
	        if (menuItem) {
	            $('#navbar li.' + menuItem).addClass('active');	
	        }
	    }
    });

    return NavView;
});