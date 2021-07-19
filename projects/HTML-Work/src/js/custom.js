$('.services-slider-main').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left custom-slick-arrow-left'><img src='../assets/imgs/blue-left-arrow.png' alt='left arrow'><img src='../assets/imgs/white-left-arrow.png' alt='left arrow'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right custom-slick-arrow-right'><img src='../assets/imgs/blue-right-arrow.png' alt='right arrow'><img src='../assets/imgs/white-right-arrow.png' alt='right arrow'></button>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
});

