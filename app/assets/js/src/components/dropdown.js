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

  const closeDropdown = function(e) {
    let $container;

    if ( $(window).width() <= 768 ) {
      $container = $nav;

      if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        closeMenu();
        $container.unbind('mouseup');
      }
    } else {
      $container = $dropdownContainer;

      if (!$container.is(e.target) &&
        $container.has(e.target).length === 0 &&
        $container.parent().has(e.target).length === 0)
      {
        $container.removeClass('visible');
        $container.unbind('mouseup');
      }
    }
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
