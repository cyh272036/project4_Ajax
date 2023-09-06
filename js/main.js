//광고 슬라이드

var slideIndex = 1;

showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide_move");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.opacity = 1;

    setTimeout(showSlides, 3000);
}





