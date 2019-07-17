$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [{
            breakpoint: 2560,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: true,
            }
        }
    ]
});