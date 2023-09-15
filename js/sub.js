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