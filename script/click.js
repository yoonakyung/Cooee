$(function(){
    $('.nav').click(function(){
        $(this).siblings('.nav_inner').stop().slideToggle();
    });
    $('.nav_inner li').click(function(){
        $(this).children('.sub').slideToggle();
        $(this).siblings().children(".sub").slideUp();
		$(this).toggleClass("on").siblings().removeClass("on")
    });
});
$(function(){
    $('.button').click(function(){
        $('#popup_email').show();
    });
    $('.close a, .popup_inner a').click(function(){
        $('#popup_email').hide();
    });
});
