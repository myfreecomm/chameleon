var chameleon = (function(){

  var $navMenuElements   = $('.ch-nav, .ch-menu, .ch-menu--helpers');
  var $navDropdown       = $('.ch-nav .ch-dropdown');
  var $search            = $('.ch-search');
  var $dropdownContainer = $('.ch-dropdown');
  var $sidebar           = $('.ch-sidebar');

  var openMenu = function(e) {
    e.preventDefault();
    $navMenuElements.addClass('open');
    $navDropdown.addClass('collapse');
  }

  var closeMenu = function() {
    $navMenuElements.removeClass('open');
    $navDropdown.removeClass('collapse visible');
  }

  var openSearch = function(e) {
    e.preventDefault();
    $search.show();
    $search.find('.ch-search-results').hide();
    $search.find('.ch-search-form-input').val('').focus();
  }

  var closeSearch = function() {
    $search.hide(300);
  }

  var toggleSearchResults = function() {
    if ($(this).val() === '') {
      $search.find('.ch-search-results').slideUp(300)
    } else {
      $search.find('.ch-search-results').slideDown(300);
    }
  }

  var removeSearchContext = function() {
    $search.find('.ch-search-context').fadeOut(300);
    $search.find('.ch-search-form-input').focus();
  }

  var openModal = function(e) {
    e.preventDefault();
    var $targetModal = $(this).data('modal'),
        $modal = $('.ch-sidebar[data-modal="' + targetModal + '"');

    $modal.show(300);
    $modal.find('.ch-sidebar-container, .btn-action').addClass('active');
  }

  var closeModal = function() {
    $('.ch-sidebar-container, .btn-action').removeClass('active');
    $sidebar.hide(300);
  }

  var openDropdown = function(e) {
    e.preventDefault();
    if ( $(this).siblings().hasClass('visible') ) {
      $dropdownContainer.removeClass('visible');
    } else {
      $dropdownContainer.removeClass('visible');
      $(this).siblings().addClass('visible')
    }
  }

  var closeDropdown = function(e) {
    var container = "";

    if ( $(window).width() <= 768 ) {
      container = $('.ch-nav');

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        closeMenu();
        container.unbind('mouseup');
      }
    } else {
      container = $dropdownContainer;

      if (!container.is(e.target) &&
        container.has(e.target).length === 0 &&
        container.parent().has(e.target).length === 0)
      {
        container.removeClass('visible');
        container.unbind('mouseup');
      }
    }
  }

  var closeChameleonModal = function() {
    if ($search.is(':visible')) { closeSearch() }

    if ($sidebar.is(':visible')) { closeModal() }
  }

  var closeOnEscape = function(e) {
    var code = e.keyCode || e.which;
    if ( code === 27 && $('.ch-overlay').is(':visible')) {
      closeSearch();
      closeChameleonModal();
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

  var toggleSidebarCollapse = function() {
    var container = $(this).prev('.ch-timeline-container');
    var collapseButton = $(this);
    var collapseButtonIcon = $(this).find('.icon');

    toggleClass(collapseButtonIcon, 'right', 'left');
    collapseButton.toggleClass('inactive')
    container.toggleClass('inactive');
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

  var bindFunctions = function() {
    $(document).on('click', '.btn-show-menu', openMenu);

    $(document).on('click', '.btn-close-menu', closeMenu);

    $(document).on('click', '.dropdown-toggle, .dropdown-hover', openDropdown);

    $(document).on('click', '.btn-search', openSearch);

    $(document).on('click', '.btn-modal', openModal);

    $(document).on('click', '.ch-overlay, .btn-close', closeChameleonModal);

    $(document).on('click', '.ch-search-content, .ch-sidebar-container', function(e) { e.stopPropagation(); });

    $(document).on('input', '.ch-search-form-input', toggleSearchResults);

    $(document).on('click', '.btn-remove-context', removeSearchContext);

    $(document).on('click', '.js-show-detail', toggleDetailView);

    $(document).on('click', '.row-link', clickableRow);

    $(document).on('click', '.btn-collapse', toggleSidebarCollapse);

    $(document).on({
      mouseup: function(e) {
        closeDropdown(e);
      },
      keydown: function(e) {
        closeOnEscape(e);
      }
    });

    $(window).resize(function() {
      if ( $(window).width() >= 768 ) {
        closeMenu();
      }
    });
  };

  var init = function() {
    bindFunctions();
  };

  return {
    init: init,
    //anything else you want available
    //through myApp.function()
    //or expose variables here too
  };


})();


$(document).ready(function() {
  chameleon.init();
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


