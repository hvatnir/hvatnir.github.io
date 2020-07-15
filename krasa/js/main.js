$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
        scrollingSpeed: 900
	});
});


$(".center").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 5
});