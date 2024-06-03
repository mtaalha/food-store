$(document).ready (function (){
    $('.food-slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        autoplay: true,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                }
            },
        ]



    });


    $('.nav-trigger').click(function(){
        $('.site-content-wrap').toggleClass('scaled');
    });

    $('.nav-background').click(function(){
        $('.site-content-wrap').toggleClass('scaled');
    })

});


const countDownDate = new Date("July 7, 2024 00:00:00").getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const duration = countDownDate - now;

    if (duration < 0) {
        clearInterval(interval);
        updateDuration(0);
        return;
    }

    updateDuration(duration);
}, 1000);

function updateDuration(duration) {
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}