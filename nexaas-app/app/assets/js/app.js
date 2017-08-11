$(document).ready(function() {

  $('.btn-show-menu').on('click', openMenu);

  $('.btn-close-menu').on('click', closeMenu);

  $('.dropdown-toggle, .dropdown-hover').on('click', showDropdown);

  $('.btn-search').on('click', showSearch);

  $('.chameleon-search-overlay, .btn-close-search').on('click', hideSearch);

  $('.chameleon-search-content').on('click', function(e) { e.stopPropagation(); });

  $('.chameleon-search-form-input').on('input', toggleSearchResults);

  $('.btn-remove-context').on('click', removeSearchContext);

  $(document).on({
    mouseup: function(e) {
      hideDropdown(e);
    },
    keydown: function(e) {
      hideSearchOnEscape(e);
    }
  });

});

var openMenu = function(e) {
  e.preventDefault();
  $('.chameleon-nav, .chameleon-menu, .chameleon-menu--helpers').addClass('open');
  $('.chameleon-nav .chameleon-dropdown').addClass('collapse');
}

var closeMenu = function() {
  $('.chameleon-nav, .chameleon-menu, .chameleon-menu--helpers').removeClass('open');
  $('.chameleon-nav .chameleon-dropdown').removeClass('collapse visible');
}

var showSearch = function(e) {
  e.preventDefault();
  $('.chameleon-search').show();
  $('.chameleon-search-results').hide();
  $('.chameleon-search-form-input').val('').focus();
}

var hideSearch = function() {
  $('.chameleon-search').hide(300);
}

var showDropdown = function(e) {
  e.preventDefault();
  if ( $(this).siblings().hasClass('visible') ) {
    $('.chameleon-dropdown').removeClass('visible');
  } else {
    $('.chameleon-dropdown').removeClass('visible');
    $(this).siblings().addClass('visible')
  }
}

var hideDropdown = function(e) {
  var container = "";

  if ( $(window).width() <= 768 ) {
    container = $('.chameleon-nav');

    if (!container.is(e.target) && container.has(e.target).length === 0 ) {
      closeMenu();
      container.unbind('mouseup');
    }
  } else {
    container = $('.chameleon-dropdown');

    if (!container.is(e.target) &&
      container.has(e.target).length === 0 &&
      container.parent().has(e.target).length === 0)
    {
      container.removeClass('visible');
      container.unbind('mouseup');
    }
  }
}

var toggleSearchResults = function() {
  $(this).val() === '' ? $('.chameleon-search-results').slideUp(300) : $('.chameleon-search-results').slideDown(300);
}

var removeSearchContext = function() {
  $('.chameleon-search-context').fadeOut(300);
  $('.chameleon-search-form-input').focus();
}

var hideSearchOnEscape = function(e) {
  var code = e.keyCode || e.which;
  if ( code === 27 && $('.chameleon-search').is(':visible')) {
    hideSearch();
  }
}

$(window).resize(function() {
  if ( $(window).width() >= 768 ) {
    closeMenu();
  }
});
