$(function(){
    $('.red').mouseenter(function(){
        $('.red_hover').stop().css("opacity","1");
        $('.color_hover:nth-child(1)').stop().css("display","block");
        $(this).siblings("img").css("display","none");
    });
    $('.red').mouseleave(function(){
        $('.red_hover').stop().css("opacity","0");
        $('.color_hover:nth-child(1)').stop().css("display","none");
        $(this).siblings("img").css("display","block");
    });
    $('.blue').mouseenter(function(){
        $('.blue_hover').stop().css("opacity","1");
        $('.color_hover:nth-child(2)').stop().css("display","block");
        $(this).siblings("img").css("display","none");
    });
    $('.blue').mouseleave(function(){
        $('.blue_hover').stop().css("opacity","0");
        $('.color_hover:nth-child(2)').stop().css("display","none");
        $(this).siblings("img").css("display","block");
    });
    $('.beige').mouseenter(function(){
        $('.beige_hover').stop().css("opacity","1");
        $('.color_hover:nth-child(3)').stop().css("display","block");
        $(this).siblings("img").css("display","none");
    });
    $('.beige').mouseleave(function(){
        $('.beige_hover').stop().css("opacity","0");
        $('.color_hover:nth-child(3)').stop().css("display","none");
        $(this).siblings("img").css("display","block");
    });
    $('.green').mouseenter(function(){
        $('.green_hover').stop().css("opacity","1");
        $('.color_hover:nth-child(4)').stop().css("display","block");
        $(this).siblings("img").css("display","none");
    });
    $('.green').mouseleave(function(){
        $('.green_hover').stop().css("opacity","0");
        $('.color_hover:nth-child(4)').stop().css("display","none");
        $(this).siblings("img").css("display","block");
    });
});

$(function(){
    $('#showroom img:nth-child(2)').click(function(){
        $('.showroom_left').stop().css("display","block");
        $('.showroom_right').stop().css("display","none");
    });
    $('#showroom img:nth-child(3)').click(function(){
        $('.showroom_right').stop().css("display","block");
        $('.showroom_left').stop().css("display","none");
    });
});