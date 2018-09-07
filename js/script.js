// SCROLL EFFECT FUNCTION
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
