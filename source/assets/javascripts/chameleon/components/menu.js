Chameleon.Components.Menu = function() {
  let buttonClasses = '.ch-menu-item .ch-dropdown-button';
  let collapseButtonClass = '.ch-collapse-button';

  const toggleMenuDropdown = function() {
    let $dropdown = $(this).parent('.ch-dropdown');
    let $dropdownSiblings = $dropdown.siblings();

    if($dropdownSiblings.hasClass('open')) {
      $dropdownSiblings.removeClass('open')
    }
    $dropdown.toggleClass('open');
  }

  const toggleNavCollapse = function() {
    $(this).parents('.ch-nav').toggleClass('collapsed')
  }

  $(document).on('click', buttonClasses,  toggleMenuDropdown);
  $(document).on('click', collapseButtonClass, toggleNavCollapse);
}
