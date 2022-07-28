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
