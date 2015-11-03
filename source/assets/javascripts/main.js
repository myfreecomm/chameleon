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
    e.stopPropagation();
    var $element = $(this).parent();
    $element.find('.breadcrumb-submenu').fadeToggle(200);
  });
  $("html").click(function(){
    $('.breadcrumb-submenu').hide(200);
  });

 });
