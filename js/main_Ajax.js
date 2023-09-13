$(document).ready(function () {

    //오늘의 책

    var all;
    all = ["1%를 읽는 힘", "고통에 관하여", "또 못 버린 물건들", '문학의 역사', '삶은 예술로 빛난다', '대화력의 비밀'];
    for (i = 0; i < all.length; i++) {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: all[i] },
        async: false,
        headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
    })
        .done(function (msg) {
            let origin = msg.documents;
            //썸네일이 빈 문자열인것은 제외
            let data = origin.filter((val) => {
                return val.thumbnail != '';
            })


                $(".left_inner").eq(i).find(".content_box").append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $(".left_inner").eq(i).find(".content_text").append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $(".left_inner").eq(i).find(".content_text").append("<p>" + data[0].sale_price + "원</p>");
                $(".left_inner").eq(i).find(".content_text").append("<p>" + data[0].authors + "</p");

                var str = data[0].contents;
                var str2 = str.substring(0, 130);
                $(".left_inner").eq(i).find(".content_text").append("<p>" + str2 + "</p>");

                $(".today_content_right >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $(".today_content_right >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $(".today_content_right >.content_box").eq(i).append("<p>" + data[0].authors + "</p");
        });
    }
    
    //오늘의 책2 - 국내


    //급상승
    var up;
    up = ["도시와 그 불확실한 벽", "집착의 법칙", "모든 멋진 일에는", '예민', '넷플릭스', '이별', '가짜 노동', '꽃'];
    for (i = 0; i < up.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: up[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })
                
                $('.look_content .content_box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('.look_content .content_box').eq(i).append("<p>" + data[0].authors + "</p>");
                $('.look_content .content_box').eq(i).append("<h3>" + data[0].title + "</h3>");
            });
    }


    //이 주의 책

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: "왜" },
        headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
    })
        .done(function (msg) {
            let origin = msg.documents;
            //썸네일이 빈 문자열인것은 제외
            let data = origin.filter((val) => {
                return val.thumbnail != '';
            })

            var boxs = document.getElementsByClassName('week_box');
            for (var i = 0; i < boxs.length; i++) {

                $(".week_content >.week_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".week_content >.week_box").eq(i).append("<p>" + msg.documents[i].authors + "</p");
                $(".week_content >.week_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                // $("#list_a > .box").eq(i).append("<p>" + msg.documents[i].sale_price + "원</p>");
            }
        });


    //best&steady

    var best;
    best = ["퓨처 셀프", "디케의 눈물", "1%를 읽는 힘", '세이노의 가르침', '일론 머스크', '푸바오', '하루 하나 브랜딩', '슈퍼노멀'];
    for (i = 0; i < best.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: best[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                // for문 (4개)
                // var divs = document.getElementsByClassName('content_box');

                // for (var j = 0; j < divs.length; j++) {

                $('#list_a >.box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('#list_a >.box').eq(i).append("<h3>" + data[0].title + "</h3>");
                $('#list_a >.box').eq(i).append("<p>" + data[0].authors + "</p>");
                // }
            });
    }

    var steady;
    steady = ["자본주의", "원씽", "돈의 속성", '불안', '해커스 토익 기출보카', '모순', '부자의 그릇', '인간관계론'];
    for (i = 0; i < steady.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: steady[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                // for문 (4개)
                // var divs = document.getElementsByClassName('content_box');

                // for (var j = 0; j < divs.length; j++) {

                $('#list_b >.box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('#list_b >.box').eq(i).append("<h3>" + data[0].title + "</h3>");
                $('#list_b >.box').eq(i).append("<p>" + data[0].authors + "</p>");

                // }
            });

        //베스트, 스테디 페이지 변경
        $('.bs_headline li').click(function () {
            let i = $(this).index();
            $('.list').eq(i).show().css('display', 'flex').siblings('.list').hide();
        });

        $('.bs_headline li:first').css('color', 'black');
        $('.bs_headline li').click(function () {
            $('li').css('color', '');
            $(this).css('color', 'black');
        });
    }


    //교보 오리지널

    var origin;
    origin = ["불귀도 살인사건", "순정복서", "완전한 인간", '교육혁명 2030', '이상한 그림', '푸른 살', '벌거벗은 세계사', '테라리음'];
    for (i = 0; i < origin.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: origin[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })

            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                // for문 (4개)
                // var divs = document.getElementsByClassName('content_box');

                // for (var j = 0; j < divs.length; j++) {

                $('.origin_content .content_box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('.origin_content .content_box').eq(i).append("<p>" + data[0].authors + "</p>");
                $('.origin_content .content_box').eq(i).append("<h3>" + data[0].title + "</h3>");

                // }
            });
    }

});

// $(document).ready(function () {
//     $('.bs_headline li:first').css('color','black');
//     $('.bs_headline li').click(function () {
//         $('li').css('color', '');
//         $(this).css('color', 'black');
//     });
// });
