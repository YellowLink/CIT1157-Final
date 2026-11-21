let slideIndex = 0;

function carousel() {
    const slides = document.querySelectorAll(".carousel");

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(carousel, 2000);
}
