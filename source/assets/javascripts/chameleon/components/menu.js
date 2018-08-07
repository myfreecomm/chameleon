Chameleon.Components.Menu = function() {
  let $button = $('.ch-menu-item .ch-dropdown-button');

  const open = function(e) {
    $(this).next('.ch-dropdown-content').toggleClass('active');
  }

  $(document).on('click', '.ch-menu-item .ch-dropdown-button', open);
}
