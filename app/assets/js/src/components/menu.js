Chameleon.Components.Menu = (function() {
  let $navMenuElements   = $('.ch-nav, .ch-menu, .ch-menu--helpers');
  let $navDropdown       = $('.ch-nav .ch-dropdown');

  const openMenu = function(e) {
    e.preventDefault();
    $navMenuElements.addClass('open');
    $navDropdown.addClass('collapse');
  }

  const closeMenu = function() {
    $navMenuElements.removeClass('open');
    $navDropdown.removeClass('collapse visible');
  }

  const bindFunctions = function() {
    $(document).on('click', '.btn-show-menu', openMenu);

    $(document).on('click', '.btn-close-menu', closeMenu);

    $(window).resize(function() {
      if ( $(window).width() >= 768 ) { closeMenu(); }
    });
  };

  const init = function() {
    bindFunctions();
  };

  return {
    init: init
  };
})();
