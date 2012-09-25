
// Define libraries
require.config({
	paths: {
		jquery: 'libs/jquery-1.7.2.min',
		lazyload: 'libs/jquery.lazyload'
	},
  shim: {
    'lazyload': ['jquery']
  }
});

// Load our app
define(['jquery', 'lazyload', 'libs/ios-zoom-fix'], function() {



});

