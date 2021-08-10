$(function(){
    $(".zero-two,.zero-one,.zero-three").click(function(){
        $(".slider-numbers").children().removeClass("click-value-zero");
        $(this).addClass("click-value-zero");
    });
    window.onscroll = function(){
        console.log(document.body.scrollTop);
        console.log($(".second-chapter").offset().top);
        if(document.body.scrollTop >= $(".second-chapter").offset().top - 150){
            $(".rigth-img-second,.left-img-second").css({
                "transform" : "translate(0px,0px)"
            })
        }
    }
    $(".owl-carousel").owlCarousel();
  });
  var owl = $('.owl-carousel');
    owl.owlCarousel({
    loop:false,
    nav:true,
    margin:10,
    responsive:{
        0:{
            autoWidth:true,
            items:2
        },
        600:{
            autoWidth:true,
            items:2
        },            
        960:{
            autoWidth:true,
            items:2
        },
        1200:{
            autoWidth:true,
            items:2
        }
    }
});