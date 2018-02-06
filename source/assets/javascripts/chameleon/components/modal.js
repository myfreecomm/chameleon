Chameleon.Components.Modal = (function() {
  let $modal = $('.ch-dialog');

  const open = function(e) {
    e.preventDefault();
    let modalType = $(this).data('modal'),
        $targetModal = $(`[data-modal=${modalType}`);

    $targetModal.show(300);
    $targetModal.find('.ch-dialog-container, .action-dialog').addClass('active');
    $targetModal.focus();
  }

  const close = function() {
    $modal.find('.ch-dialog-container, .action-dialog').removeClass('active');
    $modal.hide(300);
  }

  const bindFunctions = function() {
    $(document).on('click', '[data-target="modal"]', open);

    $(document).on('click', '.ch-overlay, .close-dialog', close);

    $modal.on('keydown', function(e) { Chameleon.Utils.keyboardClose(e, close); });

    $(document).on('click', '.ch-dialog-container', function(e) { e.stopPropagation(); });
  }

  const init = function() {
    bindFunctions();
  }

  return {
    init: init
  }
})();
