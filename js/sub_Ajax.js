
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
                $(".together_content >.content_box").eq(i).append("<p class= author>" + data[0].authors + "</p");

                var sal_pri = data[0].sale_price;
                $(".together_content >.content_box").eq(i).append("<span>" + sal_pri.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원</span>');
            });
    }
});
