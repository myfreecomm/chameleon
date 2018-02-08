Chameleon.Components.Menu = (function() {
  let $navMenuElements   = $('.ch-nav, .ch-nav-menu, .ch-nav-menu--secondary');
  let $navDropdown       = $('.ch-nav .ch-dropdown');

  const open = function(e) {
    e.preventDefault();
    $navMenuElements.addClass('open');
    $navDropdown.addClass('collapse');
  }

  const close = function() {
    $navMenuElements.removeClass('open');
    $navDropdown.removeClass('collapse visible');
  }

  const bindFunctions = function() {
    $(document).on('click', '.show-menu', open);

    $(document).on('click', '.close-menu', close);

    $(window).resize(function() {
      if ( $(window).width() >= 768 ) { close(); }
    });
  };

  const init = function() {
    bindFunctions();
  };

  return {
    init: init,
    close: close
  };
})();
