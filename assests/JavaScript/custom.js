

///////////////////////
  //Featured Carousel
///////////////////////

var owl = $('.carousel-1');owl.owlCarousel({
  margin:20,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});
// Go to the next item
$('.customNextBtn-1').click(function() {
  owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn-1').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
})


///////////////////////
    //Categories
///////////////////////
var owl2 = $('.carousel-2').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
// Go to the next item
$('.customNextBtn-2').click(function() {
  owl2.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn-2').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl2.trigger('prev.owl.carousel', [300]);
})

///////////////////////
    //Back To Top
///////////////////////
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#backtotop').fadeIn();
    } else{
      $('#backtotop').fadeOut();
    }
  });

  $("#backtotop").click(function(){
    $('html,body').animate({scrollTop : 0},100);
  });
});


var owl3 = $('.carousel-3').owlCarousel({
  loop:true,
  margin:5,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
// Go to the next item
$('.customNextBtn-3').click(function() {
owl3.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn-3').click(function() {
// With optional speed parameter
// Parameters has to be in square bracket '[]'
owl3.trigger('prev.owl.carousel', [300]);
})

// ////////////////////////////////////////////////
$(function() {
  var header = $(".normalnav");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 630) {
          header.removeClass('normalnav').removeClass('borderbottomwhite').addClass("changenav ").addClass("borderbottomblue");
          header.addClass("transition");
      } else {
          header.removeClass("changenav ").removeClass("borderbottomblue").addClass('normalnav').addClass('borderbottomwhite');
          header.addClass("transition");
      }
  });
});

///////////////////////////////////////////////////
var owl4 = $('.carousel-4').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
// Go to the next item
$('.NextBtn-4').click(function() {
owl4.trigger('next.owl.carousel');
})
// Go to the previous item
$('.PrevBtn-4').click(function() {
// With optional speed parameter
// Parameters has to be in square bracket '[]'
owl4.trigger('prev.owl.carousel', [300]);
})


/////////////////////////////////////////////////////

var owl5 = $('.carousel-5').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
// Go to the next item
$('.NextBtn-5').click(function() {
owl5.trigger('next.owl.carousel');
})
// Go to the previous item
$('.PrevBtn-5').click(function() {
// With optional speed parameter
// Parameters has to be in square bracket '[]'
owl5.trigger('prev.owl.carousel', [300]);
})

////////////////////////////////////////////////////////

var owl6 = $('.carousel-6').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
// Go to the next item
$('.NextBtn-6').click(function() {
owl6.trigger('next.owl.carousel');
})
// Go to the previous item
$('.PrevBtn-6').click(function() {
// With optional speed parameter
// Parameters has to be in square bracket '[]'
owl6.trigger('prev.owl.carousel', [300]);
})


// THE CLOCK

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();
      