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
    $('.plus img:nth-child(1)').click(function(){
        $(this).hide()
        $('.showroom_table').stop().css("display","block");
        $('.showroom_sofa').stop().css("display","none");
        $('.showroom_lamp').stop().css("display","none");
        $('.showroom_mirror').stop().css("display","none");
        $(this).siblings().show();
    });
    $('.plus img:nth-child(2)').click(function(){
        $(this).hide()
        $('.showroom_sofa').stop().css("display","block");
        $('.showroom_table').stop().css("display","none");
        $('.showroom_lamp').stop().css("display","none");
        $('.showroom_mirror').stop().css("display","none");
        $(this).siblings().show();
    });
    $('.plus img:nth-child(3)').click(function(){
        $(this).hide()
        $('.showroom_lamp').stop().css("display","block");
        $('.showroom_table').stop().css("display","none");
        $('.showroom_sofa').stop().css("display","none");
        $('.showroom_mirror').stop().css("display","none");
        $(this).siblings().show();
    });
    $('.plus img:nth-child(4)').click(function(){
        $(this).hide()
        $('.showroom_mirror').stop().css("display","block");
        $('.showroom_table').stop().css("display","none");
        $('.showroom_lamp').stop().css("display","none");
        $('.showroom_sofa').stop().css("display","none");
        $(this).siblings().show();
    });
});

$(function(){
    $("#brand ul li").click(function(){
        $(this).children().stop().css("color","#864e49");
        $(this).stop().css("background","#c7c2b9");
        $(this).siblings().stop().css("background","#ffffff");
        $(this).siblings().children().stop().css("color","#333333");
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

$(function(){
    $('.eventbox1').click(function(){
        $('#popup').show();
    });
    $('#popup a').click(function(){
        $('#popup').hide();
    });
});