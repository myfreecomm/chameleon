Chameleon.Components.Menu = function() {
  let buttonSelector = '.ch-menu-item .ch-dropdown-button';
  let collapseButtonSelector = '.ch-expand-button > button';
  let toogleButton = '[data-toogle="nav"]';
  let menu = '.ch-menu';
  let buttonMoreOptions = '.btn-more-options';
  let $nav = $('.ch-nav');

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

  const toogleLogoShadow = function() {
    let $logo = $('.ch-logo');
    if ( $(this).scrollTop() > 0 ) {
      $logo.addClass('has-shadow');
    } else {
      $logo.removeClass('has-shadow');
    }
  }

  const toggleNavCollapse = function() {
    $nav.toggleClass('collapsed');
  }

  const toggleNav = function() {
    $nav.toggleClass('active');
    $(toogleButton).find('.fa-icon').switchClass('fa-ellipsis-h-alt', 'fa-times');

    if( !$nav.hasClass('active') ) {
      $('.ch-dropdown').removeClass('open');
    }
  }

  const moreOptions = function() {
    $('.ch-header-nav').toggleClass('active');
    $(this).find('.fa-icon').switchClass('fa-angle-double-left', 'fa-angle-double-right');
  }

  $(document).on('click', buttonSelector,  toggleMenuDropdown);
  $(document).on('click', collapseButtonSelector, toggleNavCollapse);
  $(document).on('click', toogleButton, toggleNav);
  $(document).on('click', buttonMoreOptions, moreOptions);
  $(menu).on('scroll', toogleLogoShadow);
}
