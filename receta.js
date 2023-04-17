$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

