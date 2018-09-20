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
    typeSpeed: 90,
    loop: true
  });
});


// SMOOTHSCROLL PLUGIN
var scrollAbout = new SmoothScroll('a[href*="#about"]', {
  speed: 1500
});
var scrollExp = new SmoothScroll('a[href*="#experience"]', {
  speed: 1500
});
var scrollEduc = new SmoothScroll('a[href*="#education"]', {
  speed: 1500
});
var scrollAbilities = new SmoothScroll('a[href*="#abilities"]', {
  speed: 1500
});
var scrollInter = new SmoothScroll('a[href*="#interests"]', {
  speed: 1500
});
var scrollContact = new SmoothScroll('a[href*="#contact"]', {
  speed: 1500
});



// HIDDEN NAVBAR
var nav = document.getElementById('navAccess'),
    body = document.body;

nav.addEventListener("click", function(e)
{
    body.className = body.className? '' : 'with_nav';
    e.preventDefault();
});
