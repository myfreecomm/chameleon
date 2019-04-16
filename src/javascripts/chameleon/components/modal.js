Chameleon.Components.Modal = function() {
  const Selector = {
    dialog: '.ch-dialog',
    dialogElements: '.ch-dialog-container, .action-dialog',
    dialogContainer: '.ch-dialog-container',
    modals: '[data-target="modal"]',
    closeTargets: '.ch-overlay, .btn-close-dialog'
  }

  const ClassName = {
    active: 'active'
  }

  const $modal = $(Selector.dialog);

  const open = function(e) {
    e.preventDefault();
    let modalType = $(this).data('modal'),
        $targetModal = $(`[data-modal='${modalType}']`);

    $targetModal.show(300);
    $targetModal.find(Selector.dialogElements).addClass(ClassName.active);
    $targetModal.focus();
  }

  const close = function() {
    $modal.find(Selector.dialogElements).removeClass(ClassName.active);
    $modal.hide(300);
  }

  $(document).on('click', Selector.modals, open);

  $(document).on('click', Selector.closeTargets, close);

  $modal.on('keydown', function(e) { $.keyboardClose(e, close); });

  $(document).on('click', Selector.dialogContainer, function(e) { e.stopPropagation(); });
}
