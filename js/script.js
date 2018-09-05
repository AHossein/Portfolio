// SCROLL EFFECT FUNCTION

jQuery(function ($)
{
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

  var x = window.matchMedia("(min-width: 992px)");
