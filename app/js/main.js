require.config({
  paths: {
    'jquery': '../components/jquery/dist/jquery',
    'underscore': '../components/underscore-amd/underscore',
    'backbone': '../components/backbone-amd/backbone',
    'text': '../components/text/text'
  }
});

require(['views/navs/view'], function(NavView) {

    var navView = new NavView();

    navView.render();
});