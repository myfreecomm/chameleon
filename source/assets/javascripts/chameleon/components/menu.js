Chameleon.Components.Menu = function() {
  const Selector = {
    button            : '.ch-menu-item .ch-dropdown-button',
    collapseButton    : '.ch-expand-button > button',
    navContainer      : '.ch-nav',
    navMenu           : '.ch-menu',
    navHeader         : '.ch-header-nav',
    moreOptionsButton : '.btn-more-options',
    toggleButton      : '[data-toogle="nav"]',
    dropdown          : '.ch-dropdown',
    logo              : '.ch-logo',
    navElements       : '.ch-nav, .ch-nav > .ch-menu',
    icon              : '.fa-icon'
  }

  const ClassName = {
    open      : 'open',
    active    : 'active',
    hover     : 'hover',
    collapsed : 'collapsed',
    hasShadow : 'has-shadow'
  }

  const toggleMenuDropdown = function() {
    let $dropdown = $(this).parent(Selector.dropdown);
    let $dropdownSiblings = $dropdown.siblings();

    if($dropdownSiblings.hasClass(ClassName.open)) {
      $dropdownSiblings.removeClass(ClassName.open)
    }

    $dropdown.toggleClass(ClassName.open);

    if ($(window).width() <= 768 && !$(Selector.navContainer).hasClass(ClassName.active) ) {
      toggleNav()
    }
  }

  const toogleLogoShadow = function() {
    if ( $(this).scrollTop() > 0 ) {
      $(Selector.logo).addClass(ClassName.hasShadow);
    } else {
      $(Selector.logo).removeClass(ClassName.hasShadow);
    }
  }

  const toggleNavCollapse = function() {
    if ($(Selector.navContainer).hasClass(ClassName.hover)) {
      $(Selector.navContainer).removeClass(ClassName.hover);
    }

    $(Selector.navContainer).toggleClass(ClassName.collapsed);
  }

  const toggleNav = function() {
    $(Selector.navContainer).toggleClass(ClassName.active);
    $(Selector.toggleButton).find(Selector.icon).switchClass('fa-ellipsis-h-alt', 'fa-times');

    if(!$(Selector.navContainer).hasClass(ClassName.active)) {
      $(Selector.dropdown).removeClass(ClassName.open);
    }
  }

  const moreOptions = function(event) {
    $(Selector.navHeader).toggleClass(ClassName.active);
    $(this).find(Selector.icon).switchClass('fa-angle-double-left', 'fa-angle-double-right');
  }

  const showMenu = function() {
    if ($(Selector.navContainer).hasClass(ClassName.collapsed)) {
      $(Selector.navContainer).addClass(ClassName.hover);
    }
  }

  const hideMenu = function() {
    if ($(Selector.navContainer).hasClass(ClassName.collapsed)) {
      $(Selector.navContainer).removeClass(ClassName.hover);
    }
  }

  $(document).on('click', Selector.button,  toggleMenuDropdown);
  $(document).on('click', Selector.collapseButton, toggleNavCollapse);
  $(document).on('click', Selector.toggleButton, toggleNav);
  $(document).on('click', Selector.moreOptionsButton, moreOptions);
  $(document).on('mouseenter', Selector.navElements, showMenu);
  $(document).on('mouseleave', Selector.navContainer, hideMenu);
  $(Selector.navMenu).on('scroll', toogleLogoShadow);
}
