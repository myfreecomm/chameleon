Chameleon.Components.Menu = function() {
  let buttonSelector = '.ch-menu-item .ch-dropdown-button';
  let collapseButtonSelector = '.ch-expand-button > button';
  let toogleButton = '[data-toogle="nav"]';

  const toggleMenuDropdown = function() {
    let $dropdown = $(this).parent('.ch-dropdown');
    let $dropdownSiblings = $dropdown.siblings();

    if($dropdownSiblings.hasClass('open')) {
      $dropdownSiblings.removeClass('open')
    }
    $dropdown.toggleClass('open');
  }

  const toggleNavCollapse = function() {
    $(this).parents('.ch-nav').toggleClass('collapsed');
  }

  const toggleNav = function() {
    $(this).parents('.ch-nav').toggleClass('active');
    $(this).find('.fa-icon').switchClass('fa-ellipsis-h-alt', 'fa-times')
  }

  $(document).on('click', buttonSelector,  toggleMenuDropdown);
  $(document).on('click', collapseButtonSelector, toggleNavCollapse);
  $(document).on('click', toogleButton, toggleNav);
}
