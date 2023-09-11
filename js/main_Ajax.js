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

    var up;
    up = ["김영하", "트렌드", "푸바오", '예민', '넷플릭스', '마케팅', '왜', '꽃'];
    for (i = 0; i < up.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: up[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
            .done(function (msg) {

                console.log(msg);
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })
                console.log(data);

                // for문 (4개)
                // var divs = document.getElementsByClassName('content_box');

                // for (var j = 0; j < divs.length; j++) {

                $('.look_content .content_box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('.look_content .content_box').eq(i).append("<h3>" + data[0].title + "</h3>");
                $('.look_content .content_box').eq(i).append("<h6>" + data[0].authors + "</h6>");

                var str = data[0].contents;
                var str2 = str.substring(0, 60);
                $('.look_content .content_box').eq(i).append("<p>" + str2 + "</p>");

                // }
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

            var boxs = document.getElementsByClassName('week_box');
            for (var i = 0; i < boxs.length; i++) {

                $(".week_content >.week_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".week_content >.week_box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
                $(".week_content >.week_box").eq(i).append("<p>" + msg.documents[i].authors + "</p");
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

                console.log(msg);
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })
                console.log(data);

                // for문 (4개)
                // var divs = document.getElementsByClassName('content_box');

                // for (var j = 0; j < divs.length; j++) {

                $('#list_a >.box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('#list_a >.box').eq(i).append("<h3>" + data[0].title + "</h3>");
                $('#list_a >.box').eq(i).append("<h6>" + data[0].authors + "</h6>");

                var str = data[0].contents;
                var str2 = str.substring(0, 60);
                $('#list_a >.box').eq(i).append("<p>" + str2 + "</p>");

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

                console.log(msg);
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })
                console.log(data);

                // for문 (4개)
                // var divs = document.getElementsByClassName('content_box');

                // for (var j = 0; j < divs.length; j++) {

                $('#list_b >.box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('#list_b >.box').eq(i).append("<h3>" + data[0].title + "</h3>");
                $('#list_b >.box').eq(i).append("<h6>" + data[0].authors + "</h6>");

                var str = data[0].contents;
                var str2 = str.substring(0, 60);
                $('#list_b >.box').eq(i).append("<p>" + str2 + "</p>");

                // }
            });
    }

      $(function () {

        //multipage
        $('.bs_headline li').click(function () {
          let i = $(this).index();
  
          $('.list').eq(i).show().siblings('.list').hide();
        });
      });



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

                console.log(msg);
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })
                console.log(data);

                // for문 (4개)
                // var divs = document.getElementsByClassName('content_box');

                // for (var j = 0; j < divs.length; j++) {

                $('.origin_content .content_box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('.origin_content .content_box').eq(i).append("<h3>" + data[0].title + "</h3>");
                $('.origin_content .content_box').eq(i).append("<h6>" + data[0].authors + "</h6>");

                var str = data[0].contents;
                var str2 = str.substring(0, 60);
                $('.look_content .content_box').eq(i).append("<p>" + str2 + "</p>");

                // }
            });
    }

});
