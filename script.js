$( document ).ready(function() {
    $(".owl-carousel.owl-releases").owlCarousel( {
        nav: true,
        dots: false,
        responsiveBaseElement: 'section',
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            },
            1440:{
                items:4
            }
        }
    });
    $(".owl-carousel.owl-photos").owlCarousel( {
        nav: true,
        dots: false,
        responsiveBaseElement: 'section',
        responsive:{
            0:{
                items:1
            },
            425:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1440:{
                items:6
            }
        }
    });
    $(".img-wrapper").each(function(index){
        $(this).height($(this).width());
    });
});
