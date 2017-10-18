$(document).ready(function () {
    $('.home-content h1').fadeIn(2000).removeClass('hidden');
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item").click(function(){
        $("#myCarousel").carousel(1);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
});
