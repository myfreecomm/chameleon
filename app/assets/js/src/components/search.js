Chameleon.Search = (function() {
  var $search = $('.ch-search');

  var openSearch = function(e) {
    e.preventDefault();
    $search.show();
    $search.find('.ch-search-results').hide();
    $search.find('.ch-search-form-input').val('').focus();
  }

  var toggleSearchResults = function() {
    var $searchResults = $search.find('.ch-search-results');

    $(this).val() === '' ? $searchResults.slideUp(300) : $searchResults.slideDown(300);
  }

  var removeSearchContext = function() {
    $search.find('.ch-search-context').fadeOut(300);
    $search.find('.ch-search-form-input').focus();
  }

  var bindFunctions = function() {
    $(document).on('click', '.btn-search', openSearch);

    $(document).on('click', '.ch-search-content, .ch-sidebar-container', function(e) { e.stopPropagation(); });

    $(document).on('input', '.ch-search-form-input', toggleSearchResults);

    $(document).on('click', '.btn-remove-context', removeSearchContext);
  };

  var init = function() {
    bindFunctions();
  };

  return {
    init: init
  };

})();
