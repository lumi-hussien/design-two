$(function () {
    'use strict';


    $('.header').height($(window).height());

    //links add active class
    $('ul.navbar-nav li').on('click', 'a', function () {
        $('ul.navbar-nav li a').removeClass('active');
        $(this).addClass('active');
    });

    //scroll to features

    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });

    //scroll to our team
    $('.hire').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1000);
    });

    // show more works
    $('.show-more').click(function () {
        if ($('.our-work .hidden').is(':visible')) {
            $('.show-more').css('cursor', 'not-allowed');
        } else {
            $('.our-work .hidden').fadeIn(1000);
        }
    })
});