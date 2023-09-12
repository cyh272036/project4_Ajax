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

//오늘의 선택 슬라이드(왼쪽)
$(document).ready(function () {
    function todayPrev() {
        $(".today_content_left .left_inner:last").prependTo(".today_content_left");
        $(".today_content_left").css("margin-left", -650);
        $(".today_content_left").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext() {
        $(".today_content_left").stop().animate({ marginLeft: -650 }, 800, function () {
            $(".today_content_left .left_inner:first").appendTo(".today_content_left");
            $(".today_content_left").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드
    $(".prevbutton").click(function () {
        todayPrev();
    });

    $(".nextbutton").click(function () {
        todayNext();
    });

});

//오늘의 선택 슬라이드(오른쪽)
$(document).ready(function () {
    function todayPrev2() {
        $(".today_content_right .content_box:last").prependTo(".today_content_right ");
        $(".today_content_left").css("margin-left", -152);
        $(".today_content_left").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext2() {
        $(".today_content_right ").stop().animate({ marginLeft: -152 }, 800, function () {
            $(".today_content_right  .content_box:first").appendTo(".today_content_right ");
            $(".today_content_right ").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드
    $(".prevbutton").click(function () {
        todayPrev2();
    });

    $(".nextbutton").click(function () {
        todayNext2();
    });

});


//급상승 슬라이드
$(document).ready(function () {
    function prev() {
        $(".look_content .content_box:last").prependTo(".look_content");
        $(".look_content").css("margin-left", -300);
        $(".look_content").stop().animate({ marginLeft: 0 }, 800);
    }

    function next() {
        $(".look_content").stop().animate({ marginLeft: -300 }, 800, function () {
            $(".look_content .content_box:first").appendTo(".look_content");
            $(".look_content").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드
    $(".prevbutton").click(function () {
        prev();
    });

    $(".nextbutton").click(function () {
        next();
    });

});

//교보 오리지널 슬라이드
$(document).ready(function () {
    function originPrev() {
        $(".origin_content .content_box:last").prependTo(".origin_content");
        $(".origin_content").css("margin-left", -300);
        $(".origin_content").stop().animate({ marginLeft: 0 }, 800);
    }

    function originNext() {
        $(".origin_content").stop().animate({ marginLeft: -300 }, 800, function () {
            $(".origin_content .content_box:first").appendTo(".origin_content");
            $(".origin_content").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드
    $(".prevbutton").click(function () {
        originPrev();
    });

    $(".nextbutton").click(function () {
        originNext();
    });

});

//big wide 광고 슬라이드
$(document).ready(function () {
    function slide() {
        $(".big_wide_inner").stop().animate({ marginLeft: -1200 }, 800, function () {
            $(".big_wide_inner img:first").appendTo(".big_wide_inner");
            $(".big_wide_inner").css({ marginLeft: 0 });
        });
    }
    setInterval(slide, 4000)
});

//히트 버튼 슬라이드
$(document).ready(function () {
    function hitPrev() {
        $(".hit_img_inner .hit_img:last").prependTo(".hit_img_inner");
        $(".hit_img_inner").css("margin-left", -280);
        $(".hit_img_inner").stop().animate({ marginLeft: 0 }, 800);
    }

    function hitNext() {
        $(".hit_img_inner").stop().animate({ marginLeft: -280 }, 800, function () {
            $(".hit_img_inner .hit_img:first").appendTo(".hit_img_inner");
            $(".hit_img_inner").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드
    $(".prev_control").click(function () {
        hitPrev();
    });

    $(".next_control").click(function () {
        hitNext();
    });

    //드래그 스크롤
    const slider = document.querySelector('.hit_right');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
    });

    //casting


});
