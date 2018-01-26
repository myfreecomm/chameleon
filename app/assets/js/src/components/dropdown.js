Chameleon.Dropdown = (function() {
  var $nav               = $('.ch-nav');
  var $dropdownContainer = $('.ch-dropdown');

  var openDropdown = function(e) {
    e.preventDefault();
    if ( $(this).siblings().hasClass('visible') ) {
      $dropdownContainer.removeClass('visible');
    } else {
      $dropdownContainer.removeClass('visible');
      $(this).siblings().addClass('visible')
    }
  }

  var closeDropdown = function(e) {
    var $container;

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

  var bindFunctions = function() {
    $(document).on('click', '.dropdown-toggle, .dropdown-hover', openDropdown);

    $(document).on('mouseup', function(e) { closeDropdown(e); });
  };

  var init = function() {
    bindFunctions();
  };

  return {
    init: init
  };
})();
