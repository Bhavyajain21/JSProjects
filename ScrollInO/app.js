const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    console.log(e);
    sliderImages.forEach(function(slideImage) {
        // Half way through the image
        const slideinAt = window.scrollY + window.innerHeight - slideImage.height / 2;
        // Bottom of the image
        const imageBottom = slideImage.offsetTop + slideImage.height;

        const isHalfShown = slideinAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            slideImage.classList.add("active");
        } else {
            slideImage.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", checkSlide);