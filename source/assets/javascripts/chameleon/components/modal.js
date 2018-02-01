Chameleon.Components.Modal = (function() {
  let $modal = $('.ch-sidebar');

  const open = function(e) {
    e.preventDefault();
    let modalType = $(this).data('modal'),
        $targetModal = $(`[data-modal=${modalType}`);

    $targetModal.show(300);
    $targetModal.find('.ch-sidebar-container, .btn-action').addClass('active');
    $targetModal.focus();
  }

  const close = function() {
    $modal.find('.ch-sidebar-container, .btn-action').removeClass('active');
    $modal.hide(300);
  }

  const bindFunctions = function() {
    $(document).on('click', '.btn-modal', open);

    $(document).on('click', '.ch-overlay, .btn-close', close);

    $modal.on('keydown', function(e) { Chameleon.Utils.keyboardClose(e, close); });

    $(document).on('click', '.ch-sidebar-container', function(e) { e.stopPropagation(); });
  }

  const init = function() {
    bindFunctions();
  }

  return {
    init: init
  }
})();
