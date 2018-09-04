Chameleon.Components.Dropdown = function() {
  let $nav               = $('.ch-nav');
  let $dropdownContainer = $('.ch-dropdown-content');

  const open = function(e) {
    if ( $(this).siblings().hasClass('visible') ) {
      $dropdownContainer.parent().removeClass('active');
      $dropdownContainer.removeClass('visible');
    } else {
      $dropdownContainer.removeClass('visible');
      $dropdownContainer.parent().removeClass('active');
      $(this).parent().addClass('active');
      $(this).siblings().addClass('visible');
    }
  }

  const closeButton = function() {
    $(this).parents('.ch-dropdown').removeClass('active');
    $(this).parents('.ch-dropdown-content').removeClass('visible');
  }

  const closeOnDesktop = function(event, $container) {
    if (!$container.is(event.target) &&
      $container.has(event.target).length === 0 &&
      $container.parent().has(event.target).length === 0)
    {
      $container.parent().removeClass('active');
      $container.removeClass('visible');
      $container.unbind('mouseup');
    }
  }

  const close = function(e) {
    closeOnDesktop(e, $dropdownContainer);
  }

  $(document).on('click', '.ch-dropdown-toggle, .ch-dropdown-hover', open);

  $(document).on('click', '.ch-dropdown .btn-close', closeButton);

  $(document).on('mouseup', close);
}
