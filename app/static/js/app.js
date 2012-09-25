
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

  // portfolio
  $('.portfolio').each(function(){
    var portfolio = $(this);
    var elms = portfolio.find('li');
    var current = 0;

    // tracking of max positions
    var shell_width = 0;

    do_layout = function() {
      // need to shuffle stuff around to keep the fluid layout
      shell_width = portfolio.parent().width();
      elms.width(shell_width);
      portfolio.css({marginLeft: -current * shell_width});
    }

    go_next = function(e) {
      e.preventDefault();
      current++;
      if (current > elms.length - 1) {
        current = elms.length - 1;
      }
      portfolio.animate({marginLeft: -current * shell_width});
    }
    
    go_prev = function(e) {
      e.preventDefault();
      current--;
      if (current < 0) {
        current = 0;
      }
      portfolio.animate({marginLeft: -current * shell_width});
    }

    $(window).resize(do_layout);
    do_layout();


    $('.portfolio-next').click(go_next);
    $('.portfolio-prev').click(go_prev);

  });

});

