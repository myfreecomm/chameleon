Chameleon.Components.Modal = (function() {
  let $dropdownContainer = $('.ch-dropdown');
  let $sidebar           = $('.ch-sidebar');

  const open = function(e) {
    e.preventDefault();
    let $targetModal = $(this).data('modal'),
        $modal = $('.ch-sidebar[data-modal="' + $targetModal + '"');

    $modal.show(300);
    $modal.find('.ch-sidebar-container, .btn-action').addClass('active');
  }

  const close = function() {
    $sidebar.find('.ch-sidebar-container, .btn-action').removeClass('active');
    $sidebar.hide(300);
  }

  const bindFunctions = function() {
    $(document).on('click', '.btn-modal', open);

    $(document).on('click', '.ch-overlay, .btn-close', close);

    $(document).on('keydown', function(e) { $sidebar.closeOnEscape(e, close); });

    $(document).on('click', '.ch-sidebar-container', function(e) { e.stopPropagation(); });
  }

  const init = function() {
    bindFunctions();
  }

  return {
    init: init
  }
})();
