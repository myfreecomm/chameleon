Chameleon.Components.Search = (function() {
  let $search = $('.ch-search');
  let $searchResults = $search.find('.ch-search-results');
  let $modal = $('.ch-sidebar');

  const open = function(e) {
    e.preventDefault();
    $search.show();
    $search.find('.ch-search-results').hide();
    $search.find('.ch-search-form-input').val('').focus();
  }

  const close = function() {
    $search.hide(300);

    if ( $modal.find('.inside').is(':visible') ) { $modal.focus() }
  }

  const toggleResults = function() {
    $(this).val() === '' ? $searchResults.slideUp(300) : $searchResults.slideDown(300);
  }

  const removeContext = function() {
    $search.find('.ch-search-context').fadeOut(300);
    $search.find('.ch-search-form-input').focus();
  }

  const bindFunctions = function() {
    $(document).on('click', '.btn-search', open);

    $(document).on('click', '.ch-search-content', function(e) { e.stopPropagation(); });

    $(document).on('click', '.ch-search .btn-close, .ch-overlay', close);

    $search.on('keydown', function(e) { Chameleon.Utils.keyboardClose(e, close); });

    $(document).on('input', '.ch-search-form-input', toggleResults);

    $(document).on('click', '.btn-remove-context', removeContext);
  }

  const init = function() {
    bindFunctions();
  }

  return {
    init: init
  }

})();