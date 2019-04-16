Chameleon.Components.Table = function(){
  const Selector = {
    icon: '.icon',
    sidebar: '.ch-sidebar',
    detailsTarget: '[data-table-detail="toggle"]',
    rowLink: '.row-link',
    sidebarTarget: '[data-sidebar="toggle"]'
  }

  const ClassName = {
    right: 'right',
    left: 'left',
    inactive: 'inactive',
    up: 'up',
    down: 'down',
    hidden: 'hidden'
  }

  const clickableRow = function() {
    let sel = getSelection().toString();

    if(!sel){ window.location = $(this).data("href"); }
  }

  const toggleDetailView = function(e) {
    e.stopPropagation();
    let $detailRow = $(this).parents('tr').next('tr'),
        $buttonIcon = $(this).find(Selector.icon);

    $detailRow.toggleClass(ClassName.hidden);
    $buttonIcon.switchClass(ClassName.down, ClassName.up);
  }

  const toggleSidebarCollapse = function() {
    let $container = $(this).prev(Selector.sidebar),
        $collapseButton = $(this);

    $collapseButton.find(Selector.icon).switchClass(ClassName.right, ClassName.left);
    $collapseButton.toggleClass(ClassName.inactive)
    $container.toggleClass(ClassName.inactive);
  }

  $(document).on('click', Selector.detailsTarget, toggleDetailView);

  $(document).on('click', Selector.rowLink, clickableRow);

  $(document).on('click', Selector.sidebarTarget, toggleSidebarCollapse);
}
