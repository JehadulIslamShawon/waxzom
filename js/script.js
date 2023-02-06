$(function(){
    // service slick slider start 
    $('.service_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 200,
        dots: true,
        arrows: true,
        prevArrow:'<i class="fa-solid fa-circle-arrow-left prev"></i>',
        nextArrow: '<i class="fa-solid fa-circle-arrow-right next"></i>',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
        // service slick slider end 
          // counter start 
        jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
        // counter end 


        // mixitup startb 

        var containerEl = document.querySelector('.mixitup_container');

            var mixer = mixitup(containerEl);

        // mixitup end 


        // venobox start 
        new VenoBox({
          selector: '.my-video-links',
      });

      // venobox end 



      //==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
// back to top button end 


// sticky header start 

  //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('my_stick_bg');
    }
    else {
         $('.navbar').removeClass('my_stick_bg');
    }
    });  
// sticky header end 


// blog slick slider start 
$('.blog_slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 300,
  arrows: false,
  responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
    // blog slick  slick slider end 




    // <!-- clients part start  -->
    $('.client_slick').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 300,
      arrows: false,
      responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    // <!-- clients part end  -->



});



    