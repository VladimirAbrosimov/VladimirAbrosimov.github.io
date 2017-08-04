$(document).ready(function () {

var navBtnFlag = true;
$('.js-navBtn').click(function() {
    if (!navBtnFlag) return;
    navBtnFlag = false;

    $(this).toggleClass('nav-btn-active');
    $('.js-nav').slideToggle(400);

    setTimeout(function() {
        navBtnFlag = true;
    }, 400);
});


$(window).on('scroll load', function(){
    var height = $('.js-banner').innerHeight() - 200;
    if ($(window).scrollTop() > height || $('body').scrollTop() > height) {
        $('.js-header').addClass('header-scroll');
    } else {
        $('.js-header').removeClass('header-scroll');
    }
});


$(window).on('resize load', function() {
    if ($(this).outerWidth(true) < 850) {
        $('.js-header').addClass('header-mobile');
    } else {
        $('.js-header').removeClass('header-mobile');
        $('.js-navBtn').removeClass('nav-btn-active');
        $('.js-nav').css('display', '');
    }
});


var accordionFlag = true;
$('.js-accordion').click(function() {
    if (!accordionFlag) return;
    accordionFlag = false;

    $(this).parent().next('.activity__text').slideToggle(300)
    $(this).children('.i-arrow-down').toggle();
    $(this).children('.i-arrow-up').toggle();

    setTimeout(function() {
        accordionFlag = true;
    }, 300);
});


$('.headline-wrap--map').click(function(){
        $(this).hide(0);
        $('.map__iframe').show(500);
});


$('.comments__slides').slick({
    prevArrow: '.slider-prev--comments',
    nextArrow: '.slider-next--comments'
});

$('.testimonials__slides').slick({
    prevArrow: '.slider-prev--testimonials',
    nextArrow: '.slider-next--testimonials'
});
});
