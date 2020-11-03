$(document).ready(function(){
    $(".slider").slick({
        slidesToShow:3,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow:2
                }
            },{
                breakpoint: 755,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
})

