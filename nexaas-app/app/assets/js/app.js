var chameleonNavMenu = $('.chameleon-nav > .menu');

$(document).ready(function() {

  $('.ui.dropdown').dropdown();

  $('.show-menu').on('click', function(e){
    e.preventDefault();

    if (chameleonNavMenu.hasClass('open')){
      $(this).removeClass('open');
      $(this).find('.icon').addClass('ellipsis horizontal');
      $(this).find('.icon').removeClass('close');
      closeMenu();
    } else {
      $(this).addClass('open');
      $(this).find('.icon').removeClass('ellipsis horizontal');
      $(this).find('.icon').addClass('close');
      openMenu();
    }
  });

});

var openMenu = function() {
  chameleonNavMenu.removeClass('vertical labeled icon');
  chameleonNavMenu.addClass('open stackable');
}

var closeMenu = function() {
  chameleonNavMenu.addClass('vertical labeled icon');
  chameleonNavMenu.removeClass('open stackable');
}

$(window).resize(function() {
  if ( $(window).width() >= 768 ) {
    closeMenu();
  }
});
