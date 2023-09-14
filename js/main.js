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

//오늘의 선택 슬라이드(왼쪽) - 1
$(document).ready(function () {
    function todayPrev() {
        $("#left_one .content_box:last").prependTo("#left_one");
        $("#left_one").css("margin-left", -600);
        $("#left_one").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext() {
        $("#left_one").stop().animate({ marginLeft: -600 }, 800, function () {
            $("#left_one .content_box:first").appendTo("#left_one");
            $("#left_one").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -1
    $("#prev_1").click(function () {
        todayPrev();
    });

    $("#next_1").click(function () {
        todayNext();
    });

});

//오늘의 선택 슬라이드(오른쪽) -1
$(document).ready(function () {
    function todayPrev2() {
        $("#right_one .content_box:last").prependTo("#right_one");
        $("#right_one").css("margin-left", -152);
        $("#right_one").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext2() {
        $("#right_one").stop().animate({ marginLeft: -152 }, 800, function () {
            $("#right_one .content_box:first").appendTo("#right_one");
            $("#right_one").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -1
    $("#prev_1").click(function () {
        todayPrev2();
    });

    $("#next_1").click(function () {
        todayNext2();
    });

});

//오늘의 선택 슬라이드(왼쪽) -2
$(document).ready(function () {
    function todayPrev4() {
        $("#left_two .content_box:last").prependTo("#left_two");
        $("#left_two").css("margin-left", -600);
        $("#left_two").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext4() {
        $("#left_two").stop().animate({ marginLeft: -600 }, 800, function () {
            $("#left_two .content_box:first").appendTo("#left_two");
            $("#left_two").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -2
    $("#prev_2").click(function () {
        todayPrev4();
    });

    $("#next_2").click(function () {
        todayNext4();
    });

});

//오늘의 선택 슬라이드(오른쪽) -2
$(document).ready(function () {
    function todayPrev3() {
        $("#right_two .content_box:last").prependTo("#right_two");
        $("#right_two").css("margin-left", -152);
        $("#right_two").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext3() {
        $("#right_two").stop().animate({ marginLeft: -152 }, 800, function () {
            $("#right_two .content_box:first").appendTo("#right_two");
            $("#right_two").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -2
    $("#prev_2").click(function () {
        todayPrev3();
    });

    $("#next_2").click(function () {
        todayNext3();
    });

});

//오늘의 선택 슬라이드(왼쪽) -3
$(document).ready(function () {
    function todayPrev5() {
        $("#left_three .content_box:last").prependTo("#left_three");
        $("#left_three").css("margin-left", -600);
        $("#left_three").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext5() {
        $("#left_three").stop().animate({ marginLeft: -600 }, 800, function () {
            $("#left_three .content_box:first").appendTo("#left_three");
            $("#left_three").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_3").click(function () {
        todayPrev5();
    });

    $("#next_3").click(function () {
        todayNext5();
    });

});

//오늘의 선택 슬라이드(오른쪽) -3
$(document).ready(function () {
    function todayPrev6() {
        $("#right_three .content_box:last").prependTo("#right_three");
        $("#right_three").css("margin-left", -152);
        $("#right_three").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext6() {
        $("#right_three").stop().animate({ marginLeft: -152 }, 800, function () {
            $("#right_three .content_box:first").appendTo("#right_three");
            $("#right_three").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_3").click(function () {
        todayPrev6();
    });

    $("#next_3").click(function () {
        todayNext6();
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
    $("#prev_4").click(function () {
        prev();
    });

    $("#next_4").click(function () {
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
    $("#prev_5").click(function () {
        originPrev();
    });

    $("#next_5").click(function () {
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

//casting 슬라이드
$(document).ready(function () {
    let i = 0;
    const slideCount = $(".casting_inner").length;

    function slide(i) {
        $("#casting_wrap .casting_inner").eq(i - 1).stop().fadeOut();
        $("#casting_wrap .casting_inner").eq(i).stop().fadeIn('slow');
        // $("#casting_wrap").eq(i).css("background","url(./img/fhc0ymth.jpg)");
    }

    function nextSlide() {
        i++;
        if (i >= slideCount) {
            i = 0;
        }
        slide(i);
        console.log(i)
    }

    function prevSlide() {
        i--;
        if (i < 0) {
            i = slideCount - 1;
        }
        slide(i);
        console.log(i)
    }

    $(".next_control").click(function () {
        nextSlide();
    });

    $(".prev_control").click(function () {
        prevSlide();
    });

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
