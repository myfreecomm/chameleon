$(document).ready(function() {
    $("#menu").mmenu({
       slidingSubmenus: false,
       classes: "mm-slide",
       labels: true
    });

  // Breadcrumb with dropdown menu
  var $header_menu = $('.header'),
      $breadcrumb_link   = $header_menu.find('.header-breadcrumb-link');

  $breadcrumb_link.on('click', function(e){
    $('.breadcrumb-submenu').removeClass("active");
    e.stopPropagation();
    var $element = $(this).parent();
    $element.find('.breadcrumb-submenu').addClass("active");
  });
  $("html").click(function(){
    $('.breadcrumb-submenu').removeClass("active");
  });
      
 });
