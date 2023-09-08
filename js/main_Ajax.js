$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query: "파리" },
    headers: { Authorization: "KakaoAK e70bdf50a24dc5ded8f6286f7985e986" }
})
    .done(function (msg) {

        var boxs = document.getElementsByClassName('box');

        for (var i = 0; i < boxs.length; i++) {

            $("#list_a >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $("#list_a >.box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
            $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);

        }

    });