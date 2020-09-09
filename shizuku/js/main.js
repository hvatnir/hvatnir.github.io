$(document).ready(function() {

// Mobile Navigation
   
 var menu = $('#nav-menu');
 
 TweenMax.set(menu,{autoAlpha: 0, zIndex: -1});
 
 function toggleMenu() {
 	var el = menu;
 	
 	if(el.hasClass('open')) {
 	
 		TweenMax.to(el,0.5,{
 			autoAlpha: 0
 			,onStart: function() {
 			}
 			,onComplete: function() {
 				el.css('z-index',-1);
 				el.removeClass('open');
 			}
 		});
 	} else {
 		TweenMax.to(el,0.5,{
 			autoAlpha: 1
 			,onStart: function() {
 				el.css('z-index',10000);
 			}
 			,onComplete: function() {
 				
 				el.addClass('open');
 			}
 		});
 	}
 	return false;
 	
 }
 
 

 
 $('#menu-toggle').click(toggleMenu);
 
 $('#menu-close').click(toggleMenu);
 
 $('#nav-menu #nav a.normal').click(toggleMenu);
 
 
 // Smooth Scrolling 
 	$(function() {
 	  $('a[href*=#]:not([href=#])').click(function() {
 	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
 	      var target = $(this.hash);
 	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
 	      if (target.length) {
 	        $('html,body').animate({
 	          scrollTop: target.offset().top
 	        }, 1000);
 	        return false;
 	      }
 	    }
 	  });
 	});
 	
 // Slider
 
 $('.rslides').slick({
 	slide: 'li'
 	,dots: true
 	,autoplay: true
 	,infinite: true
 	,speed: 500
 	,fade: true
 	,cssEase: 'linear'
 });
 
 
 
 }); 
 
 