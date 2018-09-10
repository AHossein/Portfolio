// NAVBAR SCROLL EFFECT FUNCTION
jQuery(function ($)
{
  var x = window.matchMedia("(min-width: 992px)");

  if (x.matches)
  {
    $(".sidebar-content").mCustomScrollbar(
      {
        axis: "y",
        autoHideScrollbar: true,
        scrollInertia: 300,
      });
      $(".sidebar-content").addClass("desktop");
    }
  });


// TYPED JS
$(document).ready(function(){
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed: 40,
    typeSpeed: 90
  });
});


//SMOOTHSCROLL PLUGIN
var scrollAbout = new SmoothScroll('a[href*="#about"]');
var scrollExp = new SmoothScroll('a[href*="#experience"]');
var scrollEduc = new SmoothScroll('a[href*="#education"]');
var scrollAbilities = new SmoothScroll('a[href*="#abilities"]');
var scrollInter = new SmoothScroll('a[href*="#interests"]');
var scrollContact = new SmoothScroll('a[href*="#contact"]');
