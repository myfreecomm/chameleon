Chameleon.Components.Search = function() {
  const Selector = {
    searchButtonTarget: '[data-target="search"]',
    searchContainer: '.ch-search',
    searchResults: '.ch-search-results',
    searchInput: '.ch-search-form-input',
    searchContent: '.ch-search-content',
    modal: '.ch-sidebar',
    closeButtonsTargets: '.ch-search .btn-close, .ch-overlay'
  }

  const $search = $(Selector.searchContainer);
  const $searchResults = $search.find(Selector.searchResults);
  const $modal = $(Selector.modal);

  const open = function(e) {
    e.preventDefault();
    $search.show();
    $search.find(Selector.searchResults).hide();
    $search.find(Selector.searchInput).val('').focus();
  }

  const close = function() {
    $search.hide(300);

    if ( $modal.find('.inside').is(':visible') ) { $modal.focus() }
  }

  const toggleResults = function() {
    $(this).val() === '' ? $searchResults.slideUp(300) : $searchResults.slideDown(300);
  }

  $(document).on('click', Selector.searchButtonTarget, open);

  $(document).on('click', Selector.searchContent, function(e) { e.stopPropagation(); });

  $(document).on('click', Selector.closeButtonsTargets, close);

  $search.on('keydown', function(e) { $.keyboardClose(e, close); });

  $(document).on('input', Selector.searchInput, toggleResults);
}
