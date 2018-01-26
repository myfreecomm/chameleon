Chameleon.Modal = (function() {
  var $dropdownContainer = $('.ch-dropdown');
  var $sidebar           = $('.ch-sidebar');

  var openModal = function(e) {
    e.preventDefault();
    var $targetModal = $(this).data('modal'),
        $modal = $('.ch-sidebar[data-modal="' + $targetModal + '"');

    $modal.show(300);
    $modal.find('.ch-sidebar-container, .btn-action').addClass('active');
  }

  var closeModal = function() {
    $sidebar.find('.ch-sidebar-container, .btn-action').removeClass('active');
    $sidebar.hide(300);
  }

  var bindFunctions = function() {
    $(document).on('click', '.btn-modal', openModal);

    $(document).on('click', '.ch-overlay, .btn-close', closeModal);

    $(document).on('keydown', function(e) { $sidebar.closeOnEscape(e, closeModal); });

    $(document).on('click', '.ch-sidebar-container', function(e) { e.stopPropagation(); });
  }

  var init = function() {
    bindFunctions();
  }

  return {
    init: init
  }
})();
