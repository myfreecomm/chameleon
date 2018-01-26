Chameleon.Modal = (function() {
  var $search            = $('.ch-search');
  var $dropdownContainer = $('.ch-dropdown');
  var $sidebar           = $('.ch-sidebar');
  var $modalOverlay      = $('.ch-overlay');

  var openModal = function(e) {
    e.preventDefault();
    var $targetModal = $(this).data('modal'),
        $modal = $('.ch-sidebar[data-modal="' + $targetModal + '"');

    $modal.show(300);
    $modal.find('.ch-sidebar-container, .btn-action').addClass('active');
  }

  var closeModal = function() {
    if ($search.is(':visible') && !$sidebar.is('visible')) {
      $search.hide(300);
    } else {
      $search.hide(300);
      $sidebar.find('.ch-sidebar-container, .btn-action').removeClass('active');
      $sidebar.hide(300);
    }
  }

  var closeOnEscape = function(e) {
    var code = e.keyCode || e.which;
    if ( code === 27 && $modalOverlay.is(':visible')) { closeModal(); }
  }

  var bindFunctions = function() {
    $(document).on('click', '.btn-modal', openModal);

    $(document).on('click', '.ch-overlay, .btn-close', closeModal);

    $(document).on('click', '.ch-search-content, .ch-sidebar-container', function(e) { e.stopPropagation(); });

    $(document).on('keydown', function(e) { closeOnEscape(e); });
  };

  var init = function() {
    bindFunctions();
  };

  return {
    init: init
  };
})();
