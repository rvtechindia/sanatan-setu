// create the back to top button

$('body').prepend('<a href="#" class="back-to-top"><i class="fas fa-long-arrow-alt-up"></i></a>');
var amountScrolled = 300;
$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});
$('a.back-to-top, a.simple-back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});
//end

//weekend
$('#customer').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
navText:["<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"],
loop: true,
 slideSpeed: 300,
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})
//end
//employers
$('#employers').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
  navText:["<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"],
  loop: true,
   slideSpeed: 300,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
  })
//end

//latest-ads
$('#latest-ads').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
  navText:["<div class='nav-btn prev-slide'><i class='fas fa-long-arrow-alt-left'></i></div>","<div class='nav-btn next-slide'><i class='fas fa-long-arrow-alt-right'></i></div>"],
  loop: true,
   slideSpeed: 300,
    autoplay: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
  })
  $('#ending-ads').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
  navText:["<div class='nav-btn prev-slide'><i class='fas fa-long-arrow-alt-left'></i></div>","<div class='nav-btn next-slide'><i class='fas fa-long-arrow-alt-right'></i></div>"],
  loop: true,
   slideSpeed: 300,
    autoplay: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
  })
//end
//load

$(document).ready(function(){
    $(".single-category").slice(0, 12).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".single-category:hidden").slice(0, 6).slideDown();
      if($(".single-category:hidden").length == 0) {
        $("#loadMore").text("No More Categories Available").addClass("noContent");
      }
    });
    
  })
  
  //end