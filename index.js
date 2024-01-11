$(function start() {
    $('img')
        .animate({
            marginLeft: "75%",
            marginRight: "0"
        }, 2500)
        .animate({
            marginRight: "75%",
            marginLeft: "0"
        }, 2500, start)
});

$('h1').mouseenter(function starttxt() {
    $('h1')
        .stop()
        .animate({
            fontSize: 2+parseFloat($(this).css('font-size'))+"px"
        }, 1500, "swing", starttxt)
})
.mouseleave(function starttxt2() {
    $('h1')
        .stop()
        .animate({
            fontSize: parseFloat($(this).css('font-size'))-2+"px"
        }, 1500, "swing", starttxt2)
})