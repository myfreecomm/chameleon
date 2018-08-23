Chameleon.Components.Menu = function() {
  let buttonSelector = '.ch-menu-item .ch-dropdown-button';
  let collapseButtonSelector = '.ch-expand-button > button';
  let toogleButton = '[data-toogle="nav"]';
  let menu = '.ch-menu';

  const toggleMenuDropdown = function() {
    let $dropdown = $(this).parent('.ch-dropdown');
    let $dropdownSiblings = $dropdown.siblings();

    if($dropdownSiblings.hasClass('open')) {
      $dropdownSiblings.removeClass('open')
    }
    $dropdown.toggleClass('open');

    if ( $(window).width() <= 768 && !$('.ch-nav').hasClass('active') ) {
      toggleNav()
    }
  }

  const menuScroll = function() {
    if ( $(window).width() <= 768 && $('.ch-nav').hasClass('active') ) {

      if ( $(this).scrollTop() > 0 ) {
        $(this).siblings('.ch-logo').addClass('has-shadow');
      } else {
        $(this).siblings('.ch-logo').removeClass('has-shadow');
      }
    }
  }

  const toggleNavCollapse = function() {
    $(this).parents('.ch-nav').toggleClass('collapsed');
  }

  const toggleNav = function() {
    $('.ch-nav').toggleClass('active');
    $(toogleButton).find('.fa-icon').switchClass('fa-ellipsis-h-alt', 'fa-times');

    if( !$('.ch-nav').hasClass('active') ) {
      $('.ch-dropdown').removeClass('open');
    }
  }

  $(document).on('click', buttonSelector,  toggleMenuDropdown);
  $(document).on('click', collapseButtonSelector, toggleNavCollapse);
  $(document).on('click', toogleButton, toggleNav);
  $(menu).on('scroll', menuScroll);
}
