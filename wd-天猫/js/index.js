$(window).scroll(function () {
    if ($(window).scrollTop() >= 800) {
        $(".topnav").slideDown(500);
        $(".leftnav").slideDown(500);
    } else {
        $(".topnav").slideUp();
        $(".leftnav").slideUp(500);
    }
    if ($(window).scrollTop() >= 1100 && $(window).scrollTop() <= 1850) {
        $(".leftnav li:eq(1)").css("background", "#64c333");
        $(".leftnav li:eq(1)").siblings().css("background", "#626262");
        $(".leftnav li:eq(0)").css("background", "#FF0036");
        $(".leftnav li:eq(10)").css("background", "#ababab");
    } else if ($(window).scrollTop() >= 1850 && $(window).scrollTop() <= 2600) {
        $(".leftnav li:eq(2)").css("background", "#FF0036");
        $(".leftnav li:eq(2)").siblings().css("background", "#626262");
        $(".leftnav li:eq(0)").css("background", "#FF0036");
        $(".leftnav li:eq(10)").css("background", "#ababab");
    } else if ($(window).scrollTop() >= 2600 && $(window).scrollTop() <= 3300) {
        $(".leftnav li:eq(3)").css("background", "#EA5F8D");
        $(".leftnav li:eq(3)").siblings().css("background", "#626262");
        $(".leftnav li:eq(0)").css("background", "#FF0036");
        $(".leftnav li:eq(10)").css("background", "#ababab");
    } else if ($(window).scrollTop() >= 3300 && $(window).scrollTop() <= 4000) {
        $(".leftnav li:eq(4)").css("background", "#0AA6E8");
        $(".leftnav li:eq(4)").siblings().css("background", "#626262");
        $(".leftnav li:eq(0)").css("background", "#FF0036");
        $(".leftnav li:eq(10)").css("background", "#ababab");
    } else if ($(window).scrollTop() >= 4000 && $(window).scrollTop() <= 4700) {
        $(".leftnav li:eq(5)").css("background", "#64C333");
        $(".leftnav li:eq(5)").siblings().css("background", "#626262");
        $(".leftnav li:eq(0)").css("background", "#FF0036");
        $(".leftnav li:eq(10)").css("background", "#ababab");
    } else if ($(window).scrollTop() >= 4700 && $(window).scrollTop() <= 5400) {
        $(".leftnav li:eq(6)").css("background", "#F15453");
        $(".leftnav li:eq(6)").siblings().css("background", "#626262");
        $(".leftnav li:eq(0)").css("background", "#FF0036");
        $(".leftnav li:eq(10)").css("background", "#ababab");
    }else if($(window).scrollTop()>=5400 && $(window).scrollTop()<=6100){
        $(".leftnav li:eq(7)").css("background","#F15453");
        $(".leftnav li:eq(7)").siblings().css("background","#626262");
        $(".leftnav li:eq(0)").css("background","#FF0036");
        $(".leftnav li:eq(10)").css("background","#ababab");
    }else if($(window).scrollTop()>=6100 && $(window).scrollTop()<=6800){
        $(".leftnav li:eq(8)").css("background","#F15453");
        $(".leftnav li:eq(8)").siblings().css("background","#626262");
        $(".leftnav li:eq(0)").css("background","#FF0036");
        $(".leftnav li:eq(10)").css("background","#ababab");
    }

});
$(".leftnav li:eq(1)").on("click",function () {
    $(window).scrollTop(1101);
});
$(".leftnav li:eq(2)").on("click",function () {
    $(window).scrollTop(1851);
});
$(".leftnav li:eq(3)").on("click",function () {
    $(window).scrollTop(2601);
});
$(".leftnav li:eq(4)").on("click",function () {
    $(window).scrollTop(3301);
});
$(".leftnav li:eq(5)").on("click",function () {
    $(window).scrollTop(4001);
});
$(".leftnav li:eq(6)").on("click",function () {
    $(window).scrollTop(4701);
});
$(".leftnav li:eq(7)").on("click",function () {
    $(window).scrollTop(5401);
});
$(".leftnav li:eq(8)").on("click",function () {
    $(window).scrollTop(6101);
});

$(".totop").on("click", function () {
    $(window).scrollTop(0);
});
