let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document.
    querySelector('#carousel_button_next')
    .addEventListener("click", function() {
        moveToNextSlide();
    });

document.
    querySelector('#carousel_button_prev')
    .addEventListener("click", function() {
        moveToNextSlide();
    });

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item_visible');
        slide.classList.add('carousel_item_hidden');
    }
    slides[slidePosition].classList.add('carousel_item_visible');
}

function moveToNextSlide(){
    if (slidePosition === totalSlides-1) {
        slidePosition=0;
    } else {
        slidePosition ++;
    }
    updateSlidePosition();
}

function moveToPrevSlide(){
    if (slidePosition === 0) {
        slidePosition=totalSlides-1;
    } else {
        slidePosition --;
    }
    updateSlidePosition();
}
