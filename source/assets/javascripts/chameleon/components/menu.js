Chameleon.Components.Menu = function() {
  let buttonClasses = '.ch-menu-item .ch-dropdown-button';
  let collapseButtonClass = '.ch-collapse-button';

  const toggleMenuDropdown = function() {
    $(this).parent('.ch-dropdown').toggleClass('open');
  }

  const toggleNavCollapse = function() {
    $(this).parents('.ch-nav').toggleClass('collapsed')
  }

  $(document).on('click', buttonClasses,  toggleMenuDropdown);
  $(document).on('click', collapseButtonClass, toggleNavCollapse);
}
