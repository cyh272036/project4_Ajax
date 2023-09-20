$(document).ready(function () {
    function prev() {
        $(".book_slide_inner img:last").prependTo(".book_slide_inner");
        $(".book_slide_inner").css("margin-left", -350);
        $(".book_slide_inner").stop().animate({ marginLeft: 0 }, 800);
    }

    function next() {
        $(".book_slide_inner").stop().animate({ marginLeft: -350 }, 800, function () {
            $(".book_slide_inner img:first").appendTo(".book_slide_inner");
            $(".book_slide_inner").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드 -1
    $(".prev_1").click(function () {
        prev();
    });

    $(".next_1").click(function () {
        next();
    });
});

$(document).ready(function () {
    // 이미지를 호버할 때
    $(".click").hover(function () {
        // 해당 이미지에 대한 리스트를 천천히 나타나도록 애니메이션 적용
        $(this).siblings(".click_list").animate({ opacity: 1 }, 100);
    }, function () {
        // 호버에서 벗어나면 해당 이미지에 대한 리스트를 천천히 사라지도록 애니메이션 적용
        $(this).siblings(".click_list").animate({ opacity: 0 }, 100);
    });

    // $(".click_list").mouseleave(function () {
    //     $(this).stop().animate({ opacity: 0 }, 300);
    // });
});

$(document).ready(function () {
    function cardPrev() {
        $(".card_slide_inner img:last").prependTo(".card_slide_inner");
        $(".card_slide_inner").css("margin-left", -420);
        $(".card_slide_inner").stop().animate({ marginLeft: 0 }, 800);
    }

    function cardNext() {
        $(".card_slide_inner").stop().animate({ marginLeft: -420 }, 800, function () {
            $(".card_slide_inner img:first").appendTo(".card_slide_inner");
            $(".card_slide_inner").css({ marginLeft: 0 });
        });
    }

    // 버튼 슬라이드
    $(".prev_2").click(function () {
        cardPrev();
    });

    $(".next_2").click(function () {
        cardNext();
    });

    //드래그 스크롤
    const slider = document.querySelector('.card_slide');
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

//함께 구매한 책

$(document).ready(function () {
    const togetherContent = $(".together_content");
    const sliderBarFill = $(".slider-bar-fill");

    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;

    togetherContent.on("mousedown", (e) => {
        isDragging = true;
        startPosition = e.clientX;
        togetherContent.css("cursor", "pointer");
    });

    togetherContent.on("mousemove", (e) => {
        if (!isDragging) return;
        const currentPosition = e.clientX;
        const translate = currentTranslate + currentPosition - startPosition;

        togetherContent.css("transform", `translateX(${translate}px)`);
    });

    togetherContent.on("mouseup", () => {
        isDragging = false;
        togetherContent.css("cursor", "pointer");

        prevTranslate = currentTranslate;
        currentTranslate = parseInt(togetherContent.css("transform").split(",")[4]) || 0;
    });

    togetherContent.on("mouseleave", () => {
        isDragging = false;
        togetherContent.css("cursor", "pointer");

        prevTranslate = currentTranslate;
    });

    function updateSliderBar() {
        const scrollableWidth = togetherContent[0].scrollWidth - togetherContent.width();
        const fillWidth = (currentTranslate / scrollableWidth) * 100;
        sliderBarFill.css("width", `${fillWidth}%`);
    }

    function animate() {
        updateSliderBar();
        animationID = requestAnimationFrame(animate);
    }

    animate();
});

//펼치기 접기
$(document).ready(function () {
    $(".infor_show").click(function () {
        var infoText = $(this).find("span");
        var infoImg = $(this).find(".arrow_box")
        var textBox = $(this).closest(".textbox").find(".textbox_plus");

        if (textBox.is(":visible")) {
            textBox.hide();
            infoText.text("펼치기");
            infoImg.css({ 'transform': 'rotate(0deg)' })
        } else {
            textBox.show();
            infoText.text("접기");
            infoImg.css({ 'transform': 'rotate(180deg)' })
        }
    });
});

//텍스트 추가 불러오기 
$(function () {
    $.get("./text/author_text", function (data) {
        $("#one").html(data);
    })
});

$(function () {
    $.get("./text/changer_text", function (data) {
        $("#two").html(data);
    })
});

$(function () {
    $.get("./text/into_book_text", function (data) {
        $("#three").html(data);
    })
});

$(function () {
    $.get("./text/pub_text", function (data) {
        $("#four").html(data);
    })
});

//헤더
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            // 스크롤 위치가 300 이상이면 header_inner_middle을 고정시키고 다른 것들을 가려둡니다.
            $(".header_inner_middle").css({
                "position": "fixed",
                "top": "0",
                "width": "1200px",
                "background-color": "white",
                "z-index": "500"
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


        //스크롤에 따라 본문 리스트 표시
        if ($(window).scrollTop() >= 1000) {
            $('#nav').css({ 'position': 'fixed', 'top': '130px', 'backgroundColor': '#fff' });
        } else {
            $('#nav').css({ 'position': 'inherit', 'top': '0', 'backgroundColor': '' });
        }

        if ($(window).scrollTop() < 1000) {
            $('.nav_inner li').css({ 'color': '#767676;', 'border-bottom': 'none', 'font-weight': 'normal' })
        }

        else if ($(window).scrollTop() >= 1000 && $(window).scrollTop() < 1200) {
            $('.nav_inner li').eq(0).css({ 'color': '#222', 'border-bottom': '2px solid #222', 'font-weight': 'bold' })
            $('.nav_inner li').eq(0).siblings().css({ 'color': '#767676;', 'border-bottom': 'none', 'font-weight': 'normal' })

        } else if ($(window).scrollTop() >= 1200 && $(window).scrollTop() < 5300) {
            $('.nav_inner li').eq(1).css({ 'color': '#222', 'border-bottom': '2px solid #222', 'font-weight': 'bold' })
            $('.nav_inner li').eq(1).siblings().css({ 'color': '#767676;', 'border-bottom': 'none', 'font-weight': 'normal' });
        } else if ($(window).scrollTop() >= 5300 && $(window).scrollTop() < 6800) {
            $('.nav_inner li').eq(2).css({ 'color': '#222', 'border-bottom': '2px solid #222', 'font-weight': 'bold' })
            $('.nav_inner li').eq(2).siblings().css({ 'color': '#767676;', 'border-bottom': 'none', 'font-weight': 'normal' });
        } else {
            $('.nav_inner li').eq(3).css({ 'color': '#222', 'border-bottom': '2px solid #222', 'font-weight': 'bold' })
            $('.nav_inner li').eq(3).siblings().css({ 'color': '#767676;', 'border-bottom': 'none', 'font-weight': 'normal' });
        }
    });

    $('.nav_inner li').click(function(){
        $(this).css({ 'color': '#222', 'border-bottom': '2px solid #222', 'font-weight': 'bold' })
        $(this).siblings().css({ 'color': '#767676;', 'border-bottom': 'none', 'font-weight': 'normal' });
    });
});