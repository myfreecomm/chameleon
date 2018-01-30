Chameleon.Components.Table = (function(){

  const clickableRow = function() {
    let sel = getSelection().toString();

    if(!sel){ window.location = $(this).data("href"); }
  }

  const toggleDetailView = function(e) {
    e.stopPropagation();
    let $detailRow = $(this).parents('tr').next('tr'),
        $buttonIcon = $(this).find('.icon');

    $detailRow.toggleClass('hidden');
    $buttonIcon.switchClass('down', 'up');
  }

  const toggleSidebarCollapse = function() {
    let $container = $(this).prev('.ch-timeline-container'),
        $collapseButton = $(this);

    $collapseButton.find('.icon').switchClass('right', 'left');
    $collapseButton.toggleClass('inactive')
    $container.toggleClass('inactive');
  }

  const bindFunctions = function() {
    $(document).on('click', '.js-show-detail', toggleDetailView);

    $(document).on('click', '.row-link', clickableRow);

    $(document).on('click', '.btn-collapse', toggleSidebarCollapse);
  }

  const init = function() {
    bindFunctions();
  }

  return {
    init: init
  }
})();
