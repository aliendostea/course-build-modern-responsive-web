/*--------- navbar header ---------*/
$(function(){

  $(window).scroll(function(){

     if($(this).scrollTop() < 50 ) {
         //hide nav
         $("nav").removeClass("navbar-top");
         $("#back-to-top").fadeOut();

     } else {
       //show nav
       $("nav").addClass("navbar-top");
       $("#back-to-top").fadeIn();
     }
   });
 });

    // smooth scrolling
$(function(){

  $("a.smooth-scroll").click(function(event){
    event.preventDefault();

    //get/return id like #about, #work, #team
    var section = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");
   });
 });

   // close mobile menu on click
   $(function(){

     $(".navbar-collapse ul li a").on("click touch", function(){
       $(".navbar-toggle").click();
     });
   });


/*--------- services ---------*/

$(document).ready(function() {
    // animate on scroll
    new WOW().init();

    });


/*--------- work ---------*/
$(function(){

     $("#work").magnificPopup({
        delegate: 'a', //*child items selector, by clickiing on it popup will open*/
        type: 'image',
        gallery: {
          enabled: true
        }

     });
 });

/*--------- our team ---------*/
$(function(){

  $("#team-members").owlCarousel({
    items:3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive:{
    // breakponit from 0 up
    0 : {
     items:1,
    },

    // breakponit from 480 up
    480 : {
      items:2,
    },

    // breakponit from 768 up
    768 : {
      items:3,
     }
    }
   });
 });

 /*--------- testimonials ---------*/
 $(function(){

   $("#costumers-testimonials").owlCarousel({
     items:1,
     autoplay: true,
     smartSpeed: 700,
     loop: true,
     autoplayHoverPause: true

    });
  });

  /*--------- stats ---------*/
  $(function(){

    $('.counter').counterUp({
      delay:10,
      time:4000

    });
  });

  /*--------- clients ---------*/
  $(function(){

    $("#clients-list").owlCarousel({
      items:6,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive:{
      // breakponit from 0 up
      0 : {
       items:1,
      },

      // breakponit from 480 up
      480 : {
        items:3,
      },

      // breakponit from 768 up
      768 : {
        items:5,
      },

      // breakponit from 768 up
      992 :  {
        items:6,
       }
      }
     });
   });
