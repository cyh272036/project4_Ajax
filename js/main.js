//광고 슬라이드
var a = 0;
function slider() {
    a++;
    if (a > $('.slide_move:last').index()) {
        a = 0;
    }
    $('.slide_move').eq(a - 1).stop().fadeOut(700);
    $('.slide_move').eq(a).stop().fadeIn(1000);
    // $('.welcome_control_list li').eq(a).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });

    $(".prev").click(function () { 
        $('.slide_move').eq(a - 1).stop().fadeOut(700);
    });
};
setInterval(slider, 4000);

// $('.prev').click(function () {
//     a--;
//     $('.slide_move').eq(a).stop().fadeIn(1000).prant().siblings().fadeOut(700);
//     $('.welcome_control_list li').eq(a).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });
// })

// $('.next').click(function () {
//     a++;
//     $('.slide_move').eq(a).stop().fadeIn(1000).siblings().fadeOut(700);
//     $('.welcome_control_list li').eq(a).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });
// })

// $('.visual_nav1 li').click(function () {
//     $(this).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });
//     var i = $(this).index();
//     $('.slide_move').eq(i).fadeIn().siblings().fadeOut();
//     a = i;
// })