Chameleon.Components.Modal = (function() {
  let $dropdownContainer = $('.ch-dropdown');
  let $sidebar           = $('.ch-sidebar');

  const openModal = function(e) {
    e.preventDefault();
    let $targetModal = $(this).data('modal'),
        $modal = $('.ch-sidebar[data-modal="' + $targetModal + '"');

    $modal.show(300);
    $modal.find('.ch-sidebar-container, .btn-action').addClass('active');
  }

  const closeModal = function() {
    $sidebar.find('.ch-sidebar-container, .btn-action').removeClass('active');
    $sidebar.hide(300);
  }

  const bindFunctions = function() {
    $(document).on('click', '.btn-modal', openModal);

    $(document).on('click', '.ch-overlay, .btn-close', closeModal);

    $(document).on('keydown', function(e) { $sidebar.closeOnEscape(e, closeModal); });

    $(document).on('click', '.ch-sidebar-container', function(e) { e.stopPropagation(); });
  }

  const init = function() {
    bindFunctions();
  }

  return {
    init: init
  }
})();
