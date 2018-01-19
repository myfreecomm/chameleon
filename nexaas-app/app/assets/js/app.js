$(document).ready(function() {

  $(document).on('click', '.btn-show-menu', openMenu);

  $(document).on('click', '.btn-close-menu', closeMenu);

  $(document).on('click', '.dropdown-toggle, .dropdown-hover', showDropdown);

  $(document).on('click', '.btn-search', showSearch);

  $(document).on('click', '.btn-modal', showSidebarModal);

  $(document).on('click', '.ch-overlay, .btn-close', hideChameleonModal);

  $(document).on('click', '.ch-search-content, .ch-sidebar-container', function(e) { e.stopPropagation(); });

  $(document).on('input', '.ch-search-form-input', toggleSearchResults);

  $(document).on('click', '.btn-remove-context', removeSearchContext);

  $(document).on('click', '.js-show-detail', toggleDetailView);

  $(document).on('click', '.row-link', clickableRow);

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

var showSidebarModal = function(e) {
  e.preventDefault();
  var targetModal = $(this).data('modal');
  var modal = $('.ch-sidebar[data-modal="' + targetModal + '"');

  modal.show(300);
  modal.find('.ch-sidebar-container, .btn-show-all').addClass('active');
}

var hideSidebarModal = function() {
  $('.ch-sidebar-container, .btn-show-all').removeClass('active');
  $('.ch-sidebar').hide(300);
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

var hideChameleonModal = function() {
  if ($('.ch-search').is(':visible')) { hideSearch() }

  if ($('.ch-sidebar').is(':visible')) { hideSidebarModal() }
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

var clickableRow = function() {
  var sel = getSelection().toString();

  if(!sel){
    window.location = $(this).data("href");
  }
}

var toggleDetailView = function(e) {
  e.stopPropagation();
  var detailRow = $(this).parents('tr').next('tr');
  var buttonIcon = $(this).find('.icon');

  detailRow.toggleClass('hidden');
  toggleClass(buttonIcon, 'down', 'up');
}

var toggleClass = function(elem, class1, class2) {
  if ( $(elem).hasClass(class1) ) {
    $(elem).removeClass(class1);
    $(elem).addClass(class2);
  } else {
    $(elem).removeClass(class2);
    $(elem).addClass(class1);
  }
}

$(window).resize(function() {
  if ( $(window).width() >= 768 ) {
    closeMenu();
  }
});

var slider = document.getElementById('slider');

if (slider) {
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
}



/*** SEMANTIC UI **/

$('.ui.dropdown')
  .dropdown({
    showOnFocus: false
  })
;

$('.ui.checkbox')
  .checkbox()
;

$('.bind-popup')
  .popup({
    inline: true
  });
;

$('.ui.info')
  .popup({
    inline: true,
    on: 'hover'
  })
;

$('.ui.sticky')
  .sticky({
    context: '#report-form'
  })
;

$('.menu .item')
  .tab()
;

$('#rangestart').calendar({
  type: 'date',
  endCalendar: $('#rangeend')
});

$('#rangeend').calendar({
  type: 'date',
  startCalendar: $('#rangestart'),
  popupOptions: {
    position: 'bottom right',
    lastResort: 'bottom right'
  }
});


