let slideIndex = 0;
showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    console.log(slides);
    let i;
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length-1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}