Chameleon.Components.Dropdown = (function() {
  let $nav               = $('.ch-nav');
  let $dropdownContainer = $('.ch-dropdown');

  const openDropdown = function(e) {
    e.preventDefault();
    if ( $(this).siblings().hasClass('visible') ) {
      $dropdownContainer.removeClass('visible');
    } else {
      $dropdownContainer.removeClass('visible');
      $(this).siblings().addClass('visible')
    }
  }

  const closeOnMobile = function(event, $container) {
    if (!$container.is(event.target) && $container.has(event.target).length === 0) {
      closeMenu();
      $container.unbind('mouseup');
    }
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

  const closeDropdown = function(e) {
    $(window).width() <= 768 ? closeOnMobile(e, $nav) : closeOnDesktop(e, $dropdownContainer);
  }

  const bindFunctions = function() {
    $(document).on('click', '.dropdown-toggle, .dropdown-hover', openDropdown);

    $(document).on('mouseup', function(e) { closeDropdown(e); });
  };

  const init = function() {
    bindFunctions();
  };

  return {
    init: init
  };
})();
