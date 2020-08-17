$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
    });
})    

$(function(){
    $("#content-section3").twentytwenty();
    $("#content-section33").twentytwenty();
    $("#content-section333").twentytwenty();
  });
		
	$(document).ready(function() {
		$('.slider').slick({
			infinite: true,
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide:1,
			autoPlay: true,
			variableWidth: true,
		});
	});
