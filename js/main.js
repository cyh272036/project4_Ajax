//광고 슬라이드

$(document).ready(function () {
    let i = 0;
    const adCount = $(".slide_move").length;

    function slider() {
        i++;
        if (i > $('.slide_move:last').index()) {
            i = 0;
        }
        $('.slide_move').eq(i - 1).stop().fadeOut(700);
        $('.slide_move').eq(i).stop().fadeIn(1000);
        $('.welcome_control_list li').eq(i).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });

        $(".prev_12").click(function () {
            $('.slide_move').eq(i - 1).stop().fadeOut(700);
        });

        $(".next_12").click(function () {
            $('.slide_move').eq(i + 1).stop().fadeOut(700);
        });
    };
    setInterval(slider, 4000);

    function adslide(i) {
        $(".welcome_inner .slide_move").eq(i).stop().fadeIn('slow');
        $(".welcome_inner .slide_move").not(":eq(" + i + ")").stop().fadeOut('fast');
        $('.welcome_control_list li').eq(i).css({ 'font-weight': 'bold', 'border-bottom': '2px solid black' }).siblings().css({ 'font-weight': 'normal', 'border-bottom': 'none' });
    }

    function adNextSlide() {
        i++;
        if (i >= adCount) {
            i = 0;
        }
        adslide(i);
        console.log(i)
    }

    function adPrevSlide() {
        i--;
        if (i < 0) {
            i = adCount - 1;
        }
        adslide(i);
        console.log(i)
    }

    $(".next_12").click(function () {
        adNextSlide();
    });

    $(".prev_12").click(function () {
        adPrevSlide();
    });
});

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

//오늘의 선택 슬라이드(왼쪽) -4
$(document).ready(function () {
    function todayPrev7() {
        $("#left_four .content_box:last").prependTo("#left_four");
        $("#left_four").css("margin-left", -600);
        $("#left_four").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext7() {
        $("#left_four").stop().animate({ marginLeft: -600 }, 800, function () {
            $("#left_four .content_box:first").appendTo("#left_four");
            $("#left_four").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_4").click(function () {
        todayPrev7();
    });

    $("#next_4").click(function () {
        todayNext7();
    });

});

//오늘의 선택 슬라이드(오른쪽) -4
$(document).ready(function () {
    function todayPrev8() {
        $("#right_four .content_box:last").prependTo("#right_four");
        $("#right_four").css("margin-left", -152);
        $("#right_four").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext8() {
        $("#right_four").stop().animate({ marginLeft: -152 }, 800, function () {
            $("#right_four .content_box:first").appendTo("#right_four");
            $("#right_four").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_4").click(function () {
        todayPrev8();
    });

    $("#next_4").click(function () {
        todayNext8();
    });

});

//오늘의 선택 슬라이드(왼쪽) -5
$(document).ready(function () {
    function todayPrev9() {
        $("#left_five .content_box:last").prependTo("#left_five");
        $("#left_five").css("margin-left", -600);
        $("#left_five").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext9() {
        $("#left_five").stop().animate({ marginLeft: -600 }, 800, function () {
            $("#left_five .content_box:first").appendTo("#left_five");
            $("#left_five").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_5").click(function () {
        todayPrev9();
    });

    $("#next_5").click(function () {
        todayNext9();
    });

});

//오늘의 선택 슬라이드(오른쪽) -5
$(document).ready(function () {
    function todayPrev10() {
        $("#right_five .content_box:last").prependTo("#right_five");
        $("#right_five").css("margin-left", -152);
        $("#right_five").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext10() {
        $("#right_five").stop().animate({ marginLeft: -152 }, 800, function () {
            $("#right_five .content_box:first").appendTo("#right_five");
            $("#right_five").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_5").click(function () {
        todayPrev10();
    });

    $("#next_5").click(function () {
        todayNext10();
    });

});

//오늘의 선택 슬라이드(왼쪽) -6
$(document).ready(function () {
    function todayPrev11() {
        $("#left_six .content_box:last").prependTo("#left_six");
        $("#left_six").css("margin-left", -600);
        $("#left_six").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext11() {
        $("#left_six").stop().animate({ marginLeft: -600 }, 800, function () {
            $("#left_six .content_box:first").appendTo("#left_six");
            $("#left_six").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_6").click(function () {
        todayPrev11();
    });

    $("#next_6").click(function () {
        todayNext11();
    });

});

//오늘의 선택 슬라이드(오른쪽) -6
$(document).ready(function () {
    function todayPrev12() {
        $("#right_six .content_box:last").prependTo("#right_six");
        $("#right_six").css("margin-left", -152);
        $("#right_six").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext12() {
        $("#right_six").stop().animate({ marginLeft: -152 }, 800, function () {
            $("#right_six .content_box:first").appendTo("#right_six");
            $("#right_six").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_6").click(function () {
        todayPrev12();
    });

    $("#next_6").click(function () {
        todayNext12();
    });

});

//오늘의 선택 슬라이드(왼쪽) -7
$(document).ready(function () {
    function todayPrev13() {
        $("#left_seven .content_box:last").prependTo("#left_seven");
        $("#left_seven").css("margin-left", -600);
        $("#left_seven").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext13() {
        $("#left_seven").stop().animate({ marginLeft: -600 }, 800, function () {
            $("#left_seven .content_box:first").appendTo("#left_seven");
            $("#left_seven").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_7").click(function () {
        todayPrev13();
    });

    $("#next_7").click(function () {
        todayNext13();
    });

});

//오늘의 선택 슬라이드(오른쪽) -7
$(document).ready(function () {
    function todayPrev14() {
        $("#right_seven .content_box:last").prependTo("#right_seven");
        $("#right_seven").css("margin-left", -152);
        $("#right_seven").stop().animate({ marginLeft: 0 }, 800);
    }

    function todayNext14() {
        $("#right_seven").stop().animate({ marginLeft: -152 }, 800, function () {
            $("#right_seven .content_box:first").appendTo("#right_seven");
            $("#right_seven").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -3
    $("#prev_7").click(function () {
        todayPrev14();
    });

    $("#next_7").click(function () {
        todayNext14();
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
    $("#prev_11").click(function () {
        prev();
    });

    $("#next_11").click(function () {
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
    $("#prev_10").click(function () {
        originPrev();
    });

    $("#next_10").click(function () {
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
    let bg = ['./img/fhc0ymth.jpg', './img/dudgewhd-720.jpg', './img/ew8uf34d-720.jpg']

    function slide(i) {
        $("#casting_wrap .casting_inner").eq(i).stop().fadeIn('slow');
        $("#casting_wrap .casting_inner").not(":eq(" + i + ")").stop().fadeOut('fast');
        $("#casting_wrap").css({
            "background": `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${bg[i]})`,
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center"
        });
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
    $("#prev_9").click(function () {
        hitPrev();
    });

    $("#next_9").click(function () {
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

});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            // 스크롤 위치가 300 이상이면 header_inner_middle을 고정시키고 다른 것들을 가려둡니다.
            $(".header_inner_middle").css({
                "position": "fixed",
                "top": "0",
                "left": "50%",
                "transform": "translate(-50%,0)",
                "width": "1200px",
                "background-color": "white",
                "z-index": "500",
            });
            // 다른 요소들을 숨깁니다.
            $(".header_inner_top, .customer_box, .nav_wrap").hide();
        } else {
            // 스크롤 위치가 300 이하이면 모든 요소들을 보이게 합니다.
            $(".header_inner_middle").css({
                "position": "relative",
                "top": "auto",
                "width": "auto",
                "background-color": "transparent",
                "z-index": "auto"
            });
            $(".header_inner_top, .iconbox, .customer_box, .nav_wrap").show();
        }

    });
});

