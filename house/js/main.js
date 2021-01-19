$(document).on('ready', function() {
    $(".lazy").slick({
      lazyLoad: 'ondemand', 
      infinite: true
    });
  });

  $(function() {
	var $window = $(window);
	var $sidebar = $(".about-sidebar");
	var $sidebarTop = $sidebar.position().top;
	var $sidebarHeight = $sidebar.height();
	var $footer = $('.about-footer');
	var $footerTop = $footer.position().top;
  
	$window.scroll(function(event) {
	  $sidebar.addClass("fixed");
	  var $scrollTop = $window.scrollTop();
	  var $topPosition = Math.max(0, $sidebarTop - $scrollTop);
	  
	  if ($scrollTop + $sidebarHeight > $footerTop) {
		var $topPosition = Math.min($topPosition, $footerTop - $scrollTop - $sidebarHeight);
	  }
  
	  $sidebar.css("top", $topPosition);
	});
  });

  $(".variable").slick({
	dots: false,
	infinite: true,
	variableWidth: true
  });

  

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
	cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
	cursor.classList.add("expand");

	setTimeout(() => {
		cursor.classList.remove("expand");
	}, 500)
});

$(document).on('ready', function() {
	$(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4
	  });
  });

  