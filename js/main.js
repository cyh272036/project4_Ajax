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

$(document).ready(function () {
    function createSlideFunctions(leftSelector, rightSelector, prevSelector, nextSelector) {
        function todayPrev() {
            $(leftSelector + ' .content_box:last').prependTo(leftSelector);
            $(leftSelector).css('margin-left', -600);
            $(leftSelector).stop().animate({ marginLeft: 0 }, 800);
        }

        function todayNext() {
            $(leftSelector).stop().animate({ marginLeft: -600 }, 800, function () {
                $(leftSelector + ' .content_box:first').appendTo(leftSelector);
                $(leftSelector).css({ marginLeft: 0 });
            });
        }

        $(prevSelector).click(todayPrev);
        $(nextSelector).click(todayNext);

        function todayPrev2() {
            $(rightSelector + ' .content_box:last').prependTo(rightSelector);
            $(rightSelector).css('margin-left', -152);
            $(rightSelector).stop().animate({ marginLeft: 0 }, 800);
        }

        function todayNext2() {
            $(rightSelector).stop().animate({ marginLeft: -152 }, 800, function () {
                $(rightSelector + ' .content_box:first').appendTo(rightSelector);
                $(rightSelector).css({ marginLeft: 0 });
            });
        }

        $(prevSelector).click(todayPrev2);
        $(nextSelector).click(todayNext2);
    }

    createSlideFunctions("#left_one", "#right_one", "#prev_1", "#next_1");
    createSlideFunctions("#left_two", "#right_two", "#prev_2", "#next_2");
    createSlideFunctions("#left_three", "#right_three", "#prev_3", "#next_3");
    createSlideFunctions("#left_four", "#right_four", "#prev_4", "#next_4");
    createSlideFunctions("#left_five", "#right_five", "#prev_5", "#next_5");
    createSlideFunctions("#left_six", "#right_six", "#prev_6", "#next_6");
    createSlideFunctions("#left_seven", "#right_seven", "#prev_7", "#next_7");
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
