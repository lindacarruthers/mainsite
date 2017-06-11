$(document).ready(function() {
	// slider
	$('#coin-slider').coinslider({ 
		width: 760,
		height: 334,
		delay: 5000,
		opacity: 1
	});
	$('.nav li').hover(function(){$(this).find('a').stop().animate({backgroundPosition:'20px 19px', paddingLeft:'32'}, 300);}, function(){$(this).find('a').stop().animate({backgroundPosition:'0px 19px', paddingLeft:'12'}, 200)});
});