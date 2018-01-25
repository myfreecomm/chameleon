Chameleon.Menu = (function() {
  var $navMenuElements   = $('.ch-nav, .ch-menu, .ch-menu--helpers');
  var $navDropdown       = $('.ch-nav .ch-dropdown');

  var openMenu = function(e) {
    e.preventDefault();
    $navMenuElements.addClass('open');
    $navDropdown.addClass('collapse');
  }

  var closeMenu = function() {
    $navMenuElements.removeClass('open');
    $navDropdown.removeClass('collapse visible');
  }

  var bindFunctions = function() {
    $(document).on('click', '.btn-show-menu', openMenu);

    $(document).on('click', '.btn-close-menu', closeMenu);

    $(window).resize(function() {
      if ( $(window).width() >= 768 ) { closeMenu(); }
    });

    $(window).resize(function() {
      if ( $(window).width() >= 768 ) { closeMenu(); }
    });
  };

  var init = function() {
    bindFunctions();
  };

  return {
    init: init
  };
})();
