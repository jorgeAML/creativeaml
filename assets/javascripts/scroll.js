$(document).ready(function() {
    $(".design-scroll").click(function() {
        $("html, body").animate({
            scrollTop: $(".design").offset().top
        }, 2000);
    });
    $(".development-scroll").click(function() {
        $("html, body").animate({
            scrollTop: $(".development").offset().top
        }, 2000);
    });
    $(".alexa-scroll").click(function() {
        $("html, body").animate({
            scrollTop: $(".alexa").offset().top
        }, 2000);
    });
    $(".responsive-scroll").click(function() {
        $("html, body").animate({
            scrollTop: $(".responsive").offset().top
        }, 2000);
    });
    $(".training-scroll").click(function() {
        $("html, body").animate({
            scrollTop: $(".training").offset().top
        }, 2000);
    });

})