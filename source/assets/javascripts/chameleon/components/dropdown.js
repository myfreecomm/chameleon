Chameleon.Components.Dropdown = function() {
  let $nav               = $('.ch-nav');
  let $dropdownContainer = $('.ch-dropdown-content');

  const open = function(e) {
    if ( $(this).siblings().hasClass('visible') ) {
      $dropdownContainer.removeClass('visible');
    } else {
      $dropdownContainer.removeClass('visible');
      $(this).siblings().addClass('visible')
    }
  }

  const closeButton = function() {
    $(this).parents('.ch-dropdown-content').removeClass('visible');
  }

  const closeOnDesktop = function(event, $container) {
    if (!$container.is(event.target) &&
      $container.has(event.target).length === 0 &&
      $container.parent().has(event.target).length === 0)
    {
      $container.removeClass('visible');
      $container.unbind('mouseup');
    }
  }

  const close = function(e) {
    closeOnDesktop(e, $dropdownContainer);
  }

  $(document).on('click', '.ch-dropdown-toggle, .ch-dropdown-hover', open);

  $(document).on('click', '.ch-dropdown .icon.close', closeButton);

  $(document).on('mouseup', close);
}
