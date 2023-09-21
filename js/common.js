$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            // 스크롤 위치가 300 이상이면 header_inner_middle을 고정시키고 다른 것들을 가려둡니다.
            $(".middle_wrap_big").css({
                "position": "fixed",
                "top": "0",
                "width": "100%",
                "background-color": "white",
                "z-index": "500"
            });
            // 다른 요소들을 숨깁니다.
            $(".header_inner_top, .customer_box, .nav_wrap").hide();
        } else {
            // 스크롤 위치가 300 이하이면 모든 요소들을 보이게 합니다.
            $(".middle_wrap_big").css({
                "position": "relative",
                "top": "auto",
                "width": "100%",
                "background-color": "white",
                "z-index": "0"
            });
            $(".header_inner_top, .iconbox, .customer_box, .nav_wrap").show();
        }
    });
});