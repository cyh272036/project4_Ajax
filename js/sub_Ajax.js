//함께 구매한 책
$(document).ready(function () {
    var all;
    all = ["아주 희미한 빛으로도", "메리골드 마음 세탁소", "동물농장", '이방인', '노인과 바다', '데미안', '변신', '파리대왕', '위대한 개츠비', '싯다르타', '시지프 신화', '어린 왕자', '가여운 것들', '떨림과 울림', '모순'];
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

                $(".together_content >.content_box").eq(i).append('<a href="#">' + "<img src='" + data[0].thumbnail + "'/>" + "</a>");
                $(".together_content >.content_box").eq(i).append("<h3>" + '<a href="#">' + data[0].title + "</a>" + "</h3>");
                $(".together_content >.content_box").eq(i).append("<p class= to>" + data[0].authors + "</p");

                var sal_pri = data[0].sale_price;
                $(".together_content >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
            });
    }

    //오늘의 선택
    var today;
    today = ["오만과 편견", "나의 라임 오렌지나무", "이방인", "K문학의 탄생", "자본론", "레미제라블"];
    for (i = 0; i < today.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: today[i] },
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
            });
    }

    var dead;
    dead = ["사형장으로의 초대", "백치", "마음이 아픈 사람들", '크리톤', '환상의 여인', '소크라테스'];
    for (i = 0; i < dead.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: dead[i] },
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
            });
    }

    var today;
    today = ["법의 기초", "번역", "국부론", '너의 말이 좋아서 밑줄을 그었다', '네이티브 영어표현력 사전', '여백을 번역하라'];
    for (i = 0; i < today.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: today[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })

                $('#list_c >.box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
            });
    }

    var steady;
    steady = ["솔라리스", "기탄잘리", "오페라의 유령", '채식주의자', '그리스인 조르바', '빛의 제국'];
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
                console.log(steady)
                $('#list_d >.box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
            });

        //페이지 변경
        $('.pick_title_list li').click(function () {
            let i = $(this).index();
            $('.list').eq(i).show().css('display', 'flex').siblings('.list').hide();
        });

        $('.pick_title_list li:first').css({ 'color': '#fff', 'backgroundColor': "#595959" });
        $('.pick_title_list li').click(function () {
            $('.pick_title_list li').css({ 'color': 'black', 'backgroundColor': "#f7f7f7" });
            $(this).css({ 'color': '#fff', 'backgroundColor': "#595959" });
        });
    }

    var author;
    author = ["반항인", "결혼 여름", "페스트", '카뮈의 말', '디 에센셜', '시지프 신화', '반항하는 인간' , '전락'];
    for (i = 0; i < author.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: author[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })
                console.log(steady)
                $('#author_content_one >.content_box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
            });

    }

    var change;
    change = ["투명인간", "킬리만자로의 눈", "어린 왕자", '동물농장', '위대한 개츠비', '노인과 바다', '1984' , '헤밍웨이'];
    for (i = 0; i < change.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: change[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val) => {
                    return val.thumbnail != '';
                })
                console.log(steady)
                $('#author_content_two >.content_box').eq(i).append("<img src='" + data[0].thumbnail + "'/>");
            });

    }

});