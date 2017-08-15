$(document).ready(function() {

  $('.btn-show-menu').on('click', openMenu);

  $('.btn-close-menu').on('click', closeMenu);

  $('.dropdown-toggle, .dropdown-hover').on('click', showDropdown);

  $('.btn-search').on('click', showSearch);

  $('.ch-search-overlay, .btn-close-search').on('click', hideSearch);

  $('.btn-notifications').on('click', showNotifications);

  $('.ch-notifications-overlay, .btn-close-notifications').on('click', hideNotifications);

  $('.ch-search-content, .ch-notifications-content').on('click', function(e) { e.stopPropagation(); });

  $('.ch-search-form-input').on('input', toggleSearchResults);

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
  $('.ch-nav, .ch-menu, .ch-menu--helpers').addClass('open');
  $('.ch-nav .ch-dropdown').addClass('collapse');
}

var closeMenu = function() {
  $('.ch-nav, .ch-menu, .ch-menu--helpers').removeClass('open');
  $('.ch-nav .ch-dropdown').removeClass('collapse visible');
}

var showSearch = function(e) {
  e.preventDefault();
  $('.ch-search').show();
  $('.ch-search-results').hide();
  $('.ch-search-form-input').val('').focus();
}

var hideSearch = function() {
  $('.ch-search').hide(300);
}

var showNotifications = function(e) {
  e.preventDefault();
  $('.ch-notifications').show(300);
  $('.ch-notifications-content').addClass('active');
}

var hideNotifications = function() {
  $('.ch-notifications-content').removeClass('active');
  $('.ch-notifications').hide(300);
}

var showDropdown = function(e) {
  e.preventDefault();
  if ( $(this).siblings().hasClass('visible') ) {
    $('.ch-dropdown').removeClass('visible');
  } else {
    $('.ch-dropdown').removeClass('visible');
    $(this).siblings().addClass('visible')
  }
}

var hideDropdown = function(e) {
  var container = "";

  if ( $(window).width() <= 768 ) {
    container = $('.ch-nav');

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      closeMenu();
      container.unbind('mouseup');
    }
  } else {
    container = $('.ch-dropdown');

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
  $(this).val() === '' ? $('.ch-search-results').slideUp(300) : $('.ch-search-results').slideDown(300);
}

var removeSearchContext = function() {
  $('.ch-search-context').fadeOut(300);
  $('.ch-search-form-input').focus();
}

var hideSearchOnEscape = function(e) {
  var code = e.keyCode || e.which;
  if ( code === 27 && $('.ch-search').is(':visible')) {
    hideSearch();
  }
}

$(window).resize(function() {
  if ( $(window).width() >= 768 ) {
    closeMenu();
  }
});
