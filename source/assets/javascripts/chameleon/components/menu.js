Chameleon.Components.Menu = function() {
  const Selector = {
    button            : '.ch-menu-item .ch-dropdown-button',
    collapseButton    : '.ch-expand-button > button',
    navContainer      : '.ch-nav',
    navMenu           : '.ch-menu',
    navHeader         : '.ch-header-nav',
    moreOptionsButton : '.btn-more-options',
    toggleButton      : '[data-toogle="nav"]',
    dropdown         : '.ch-dropdown',
    logo              : '.ch-logo',
    navElements       : '.ch-nav, .ch-nav > .ch-menu'
  }

  const toggleMenuDropdown = function() {
    let $dropdown = $(this).parent(Selector.dropdown);
    let $dropdownSiblings = $dropdown.siblings();

    if($dropdownSiblings.hasClass('open')) {
      $dropdownSiblings.removeClass('open')
    }
    $dropdown.toggleClass('open');

    if ($(window).width() <= 768 && !$(Selector.navContainer).hasClass('active') ) {
      toggleNav()
    }
  }

  const toogleLogoShadow = function() {
    if ( $(this).scrollTop() > 0 ) {
      $(Selector.logo).addClass('has-shadow');
    } else {
      $(Selector.logo).removeClass('has-shadow');
    }
  }

  const toggleNavCollapse = function() {
    if ($(Selector.navContainer).hasClass('hover')) {
      $(Selector.navContainer).removeClass('hover');
    }

    $(Selector.navContainer).toggleClass('collapsed');
  }

  const toggleNav = function() {
    $(Selector.navContainer).toggleClass('active');
    $(Selector.toogleButton).find('.fa-icon').switchClass('fa-ellipsis-h-alt', 'fa-times');

    if(!$(Selector.navContainer).hasClass('active')) {
      $(Selector.dropdown).removeClass('open');
    }
  }

  const moreOptions = function() {
    $(Selector.navHeader).toggleClass('active');
    $(this).find('.fa-icon').switchClass('fa-angle-double-left', 'fa-angle-double-right');
  }

  const showMenu = function() {
    if ($(Selector.navContainer).hasClass('collapsed')) {
      $(Selector.navContainer).addClass('hover')
    }
  }

  const hideMenu = function() {
    if ($(Selector.navContainer).hasClass('collapsed')) {
      $(Selector.navContainer).removeClass('hover')
    }
  }

  $(document).on('click', Selector.button,  toggleMenuDropdown);
  $(document).on('click', Selector.collapseButton, toggleNavCollapse);
  $(document).on('click', Selector.toggleButton, toggleNav);
  $(document).on('click', Selector.moreOptionButton, moreOptions);
  $(document).on('mouseenter', Selector.navElements, showMenu);
  $(document).on('mouseleave', Selector.navContainer, hideMenu);
  $(Selector.navMenu).on('scroll', toogleLogoShadow);
}
