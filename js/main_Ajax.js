$(document).ready(function () {

    //오늘의 책
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: "소설" },
        headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
    })
        .done(function (msg) {

            var boxs = document.getElementsByClassName('content_box');
            for (var i = 0; i < boxs.length; i++) {

                $(".today_content_right >.content_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".today_content_right >.content_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".today_content_right >.content_box").eq(i).append("<p>" + msg.documents[i].authors + "</p");
                // $("#list_a > .box").eq(i).append("<p>" + msg.documents[i].sale_price + "원</p>");

                $(".today_content_left >.content_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".today_content_left >.content_text").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".today_content_left >.content_text").eq(i).append("<p>" + msg.documents[i].sale_price + "원</p>");
                $(".today_content_left >.content_text").eq(i).append("<p>" + msg.documents[i].authors + "</p");

                var str = msg.documents[i].contents;
                var str2 = str.substring(0, 130);
                $(".today_content_left >.content_text").eq(i).append("<p>" + str2 + "</p>");
            }

        });


    //급상승

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: "이" },
        headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
    })
        .done(function (msg) {

            var boxs = document.getElementsByClassName('content_box');
            for (var i = 0; i < boxs.length; i++) {

                $(".look_content >.content_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".look_content >.content_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".look_content >.content_box").eq(i).append("<p>" + msg.documents[i].authors + "</p");
                // $("#list_a > .box").eq(i).append("<p>" + msg.documents[i].sale_price + "원</p>");
            }
        });

    //이 주의 책

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: "왜" },
        headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
    })
        .done(function (msg) {

            var boxs = document.getElementsByClassName('week_box');
            for (var i = 0; i < boxs.length; i++) {

                $(".week_content >.week_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".week_content >.week_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".week_content >.week_box").eq(i).append("<p>" + msg.documents[i].authors + "</p");
                // $("#list_a > .box").eq(i).append("<p>" + msg.documents[i].sale_price + "원</p>");
            }
        });



    //best&steady

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: "심리" },
        headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
    })
        .done(function (msg) {

            var boxs = document.getElementsByClassName('box'); console.log(boxs)
            for (var i = 0; i < boxs.length; i++) {

                $("#list_a >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $("#list_a >.box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                $("#list_a >.box").eq(i).append("<p>" + msg.documents[i].authors + "</p");
                // $("#list_a > .box").eq(i).append("<p>" + msg.documents[i].sale_price + "원</p>");

            }

        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: "경제" },
        headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
    })
        .done(function (msg) {
            var boxs = document.getElementsByClassName('box');

            for (var i = 0; i < boxs.length; i++) {

                $("#list_b >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $("#list_b >.box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                $("#list_b >.box").eq(i).append("<p>" + msg.documents[i].authors + "</p");

            }
        });

    
        
    //교보 오리지널

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: "교보" },
        headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
    })
        .done(function (msg) {

            var boxs = document.getElementsByClassName('content_box');
            for (var i = 0; i < boxs.length; i++) {

                $(".origin_content >.content_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".origin_content >.content_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".origin_content >.content_box").eq(i).append("<p>" + msg.documents[i].authors + "</p");
                // $("#list_a > .box").eq(i).append("<p>" + msg.documents[i].sale_price + "원</p>");
            }
        });
});



$(function () {

    //multipage
    $('.bs_headline h1').click(function () {
        let i = $(this).index();
        $('.list').eq(i).show().siblings('.list').hide();
    });

});

