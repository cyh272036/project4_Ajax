$(document).ready(function () {

    //오늘의 책1 - 전체
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


                $("#left_one >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#left_one >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#left_one >.content_box").eq(i).append("<p class= author>" + data[0].authors + "</p");

                var pri = data[0].price;
                var sal_pri = data[0].sale_price;
                var total_pri = pri - sal_pri;
                var sal = parseInt(Number(pri / total_pri))

                $("#left_one >.content_box").eq(i).append("<span class=per>" + sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%</span> ');
                $("#left_one >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
                $("#left_one >.content_box").eq(i).append("<p class=text>" + data[0].contents.substring(0, 130) + "</p>");

                $("#right_one >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#right_one >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#right_one >.content_box").eq(i).append("<p>" + data[0].authors + "</p");
            });
    }

    //오늘의 책2 - 국내 
    var up;
    up = ["도시와 그 불확실한 벽", "집착의 법칙", "모든 멋진 일에는", '예민', '넷플릭스', '이별', '가짜 노동', '꽃'];
    for (i = 0; i < up.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query: up[i] },
            async: false,
            headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                $("#left_two >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#left_two  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#left_two  >.content_box").eq(i).append("<p class= author>" + data[0].authors + "</p");

                var pri = data[0].price;
                var sal_pri = data[0].sale_price;
                var total_pri = pri - sal_pri;
                var sal = parseInt(Number(pri / total_pri))

                $("#left_two  >.content_box").eq(i).append("<span class=per>" + sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%</span> ');
                $("#left_two  >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
                $("#left_two  >.content_box").eq(i).append("<p class=text>" + data[0].contents.substring(0, 130) + "</p>");

                $("#right_two  >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#right_two  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#right_two  >.content_box").eq(i).append("<p>" + data[0].authors + "</p");
            });
    }

    //오늘의 책3 - 국외
    var globel;
    globel = ["Oppenheimer", "Wonder", "Crying in H Mart", 'Be Your Future Self Now', 'Never Give an Inch', 'Lembke', 'Spare', 'Chip War'];
    for (i = 0; i < globel.length; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query: globel[i] },
            async: false,
            headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                $("#left_three >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#left_three  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#left_three  >.content_box").eq(i).append("<p class= author>" + data[0].authors + "</p");

                var pri = data[0].price;
                var sal_pri = data[0].sale_price;
                var total_pri = pri - sal_pri;
                var sal = parseInt(Number(pri / total_pri))

                $("#left_three  >.content_box").eq(i).append("<span class=per>" + sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%</span> ');
                $("#left_three  >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
                $("#left_three  >.content_box").eq(i).append("<p class=text>" + data[0].contents.substring(0, 130) + "</p>");

                $("#right_three  >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#right_three  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#right_three  >.content_box").eq(i).append("<p>" + data[0].authors + "</p");
            });
    }

    //오늘의 책4 - ebook
    var ebook;
    ebook = ["인간을 진화시키는 AI", "손끝에 빛나는 나비", "도쿄 리벤저스", '히든 히어로스', '마약 중독과 전쟁의 시대', '블루프린트', '해빗 메카닉', '은유의 글쓰기 상담소'];
    for (i = 0; i < ebook.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query: ebook[i] },
            async: false,
            headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                $("#left_four >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#left_four  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#left_four  >.content_box").eq(i).append("<p class= author>" + data[0].authors + "</p");

                var pri = data[0].price;
                var sal_pri = data[0].sale_price;
                var total_pri = pri - sal_pri;
                var sal = parseInt(Number(pri / total_pri))

                $("#left_four  >.content_box").eq(i).append("<span class=per>" + sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%</span> ');
                $("#left_four  >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
                $("#left_four  >.content_box").eq(i).append("<p class=text>" + data[0].contents.substring(0, 130) + "</p>");

                $("#right_four  >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#right_four  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#right_four  >.content_box").eq(i).append("<p>" + data[0].authors + "</p");
            });
    }

    //오늘의 책5 - sam
    var sam;
    sam = ["창업가 수업", "너의 퀴즈", "씨네 클래식", '우울해방일지', '치유를 파는 찻집', '너의 꿈이 될게', '모호한 상실', '어른의 국어력'];
    for (i = 0; i < sam.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query: sam[i] },
            async: false,
            headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                $("#left_five >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#left_five  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#left_five >.content_box").eq(i).append("<p class= author>" + data[0].authors + "</p");

                var pri = data[0].price;
                var sal_pri = data[0].sale_price;
                var total_pri = pri - sal_pri;
                var sal = parseInt(Number(pri / total_pri))

                $("#left_five  >.content_box").eq(i).append("<span class=per>" + sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%</span> ');
                $("#left_five  >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
                $("#left_five  >.content_box").eq(i).append("<p class=text>" + data[0].contents.substring(0, 130) + "</p>");

                $("#right_five  >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#right_five  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#right_five  >.content_box").eq(i).append("<p>" + data[0].authors + "</p");
            });
    }

    //오늘의 책6 - hottracks
    var tracks;
    tracks = ["문학의 역사", "헨리 키신저의 외교", "불멸의 화가 카라바조", '이것은 라울 뒤피에 관한 이야기', '유현준의 인문 건축 기행', '형태의 기원', '기후 책', '반도체 인사이트 센서 전쟁'];
    for (i = 0; i < tracks.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query: tracks[i] },
            async: false,
            headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                $("#left_six >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#left_six  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#left_six >.content_box").eq(i).append("<p class= author>" + data[0].authors + "</p");

                var pri = data[0].price;
                var sal_pri = data[0].sale_price;
                var total_pri = pri - sal_pri;
                var sal = parseInt(Number(pri / total_pri))

                $("#left_six >.content_box").eq(i).append("<span class=per>" + sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%</span> ');
                $("#left_six >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
                $("#left_six >.content_box").eq(i).append("<p class=text>" + data[0].contents.substring(0, 130) + "</p>");

                $("#right_six >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#right_six >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#right_six >.content_box").eq(i).append("<p>" + data[0].authors + "</p");
            });
    }

    //오늘의 책7 - onlyKB
    var KB;
    KB = ["불편한 편의점", "웰씽킹", "오십에 읽는 논어", '작은 별이지만 빛나고 있어', 'City of Glass', '재주도 좋아. 제주로 은퇴하다니', '몽상가의 침묵', '실전 사장책'];
    for (i = 0; i < KB.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: { query: KB[i] },
            async: false,
            headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                $("#left_seven >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#left_seven  >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#left_seven >.content_box").eq(i).append("<p class= author>" + data[0].authors + "</p");

                var pri = data[0].price;
                var sal_pri = data[0].sale_price;
                var total_pri = pri - sal_pri;
                var sal = parseInt(Number(pri / total_pri))

                $("#left_seven >.content_box").eq(i).append("<span class=per>" + sal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%</span> ');
                $("#left_seven >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
                $("#left_seven >.content_box").eq(i).append("<p class=text>" + data[0].contents.substring(0, 130) + "</p>");

                $("#right_seven >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $("#right_seven >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $("#right_seven >.content_box").eq(i).append("<p>" + data[0].authors + "</p");
            });

    //오늘의 책 리스트 페이지 변경
    $('.today_title_list li').click(function () {
        let i = $(this).index();
        console.log(i)
        $('.today_content').eq(i).show().css('display', 'flex').siblings('.today_content').hide();
    });

    $('.today_title_list li:first').css('color', 'black');
    $('.today_title_list li').click(function () {
        $('.today_title_list li').css('color', '');
        $(this).css('color', 'black');
    });
}

    //급상승!
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

                $('#list_a >.box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('#list_a >.box').eq(i).append("<h3>" + data[0].title + "</h3>");
                $('#list_a >.box').eq(i).append("<p>" + data[0].authors + "</p>");
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

                $('#list_b >.box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('#list_b >.box').eq(i).append("<h3>" + data[0].title + "</h3>");
                $('#list_b >.box').eq(i).append("<p>" + data[0].authors + "</p>");
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

                $('.origin_content .content_box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
                $('.origin_content .content_box').eq(i).append("<p>" + data[0].authors + "</p>");
                $('.origin_content .content_box').eq(i).append("<h3>" + data[0].title + "</h3>");
            });
    }

});