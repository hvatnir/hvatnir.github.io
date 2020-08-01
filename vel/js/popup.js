$('.js-btn').click(function() {
    event.preventDefault();
    $('main').css('filter','blur(5px)');
    $('.js-overlay').fadeIn();
});

$('.js-close-popup').click(function() {
    $('.js-overlay').fadeOut();
    $('main').css('filter','none');
});

$(document).mouseup(function (e) {
    var popup= $('.js-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
        $('.js-overlay').fadeOut();
        $('main').css('filter','none');
    }
});