document.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.swiper-container');

    sliders.forEach(function(sliderHTML) {
        new Swiper(sliderHTML, {
            effect: 'slide', 
            slidesPerView: 'auto', 
            spaceBetween: 25,
            freeMode: true,
            preventClicks: false,
            preventClicksPropagation: false
        });
    });
});