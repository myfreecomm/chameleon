Chameleon.Components.Search = (function() {
  let $search = $('.ch-search');
  let $searchResults = $search.find('.ch-search-results');

  const openSearch = function(e) {
    e.preventDefault();
    $search.show();
    $search.find('.ch-search-results').hide();
    $search.find('.ch-search-form-input').val('').focus();
  }

  const closeSearch = function() {
    $search.hide(300);
  }

  const toggleSearchResults = function() {
    $(this).val() === '' ? $searchResults.slideUp(300) : $searchResults.slideDown(300);
  }

  const removeSearchContext = function() {
    $search.find('.ch-search-context').fadeOut(300);
    $search.find('.ch-search-form-input').focus();
  }

  const bindFunctions = function() {
    $(document).on('click', '.btn-search', openSearch);

    $(document).on('click', '.ch-search-content', function(e) { e.stopPropagation(); });

    $(document).on('click', '.ch-overlay', closeSearch);

    $(document).on('keydown', function(e) { $search.closeOnEscape(e, closeSearch); });

    $(document).on('input', '.ch-search-form-input', toggleSearchResults);

    $(document).on('click', '.btn-remove-context', removeSearchContext);
  }

  const init = function() {
    bindFunctions();
  }

  return {
    init: init
  }

})();
