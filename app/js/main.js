require.config({
  paths: {
    'jquery': '../components/jquery/dist/jquery',
    'underscore': '../components/underscore-amd/underscore',
    'backbone': '../components/backbone-amd/backbone',
  }
});

require(['collections/navs'], function(NavCollection) {

	// console.log(NavCollection);
  var navs = new NavCollection;
  navs.fetch();
  console.log(navs);
  // navs.fetch();
});