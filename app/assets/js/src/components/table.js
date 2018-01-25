Chameleon.Table = (function(){

  var clickableRow = function() {
    var sel = getSelection().toString();

    if(!sel){ window.location = $(this).data("href"); }
  }

  var toggleDetailView = function(e) {
    e.stopPropagation();
    var $detailRow = $(this).parents('tr').next('tr'),
        $buttonIcon = $(this).find('.icon');

    $detailRow.toggleClass('hidden');
    $buttonIcon.switchClass('down', 'up');
  }

  var toggleSidebarCollapse = function() {
    var $container = $(this).prev('.ch-timeline-container'),
        $collapseButton = $(this);

    $collapseButton.find('.icon').switchClass('right', 'left');
    $collapseButton.toggleClass('inactive')
    $container.toggleClass('inactive');
  }

  var bindFunctions = function() {
    $(document).on('click', '.js-show-detail', toggleDetailView);

    $(document).on('click', '.row-link', clickableRow);

    $(document).on('click', '.btn-collapse', toggleSidebarCollapse);
  }

  var init = function() {
    bindFunctions();
  }

  return {
    init: init
  }
})();
