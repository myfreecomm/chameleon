var chameleon = (function(){

  var $nav               = $('.ch-nav');
  var $navMenuElements   = $('.ch-nav, .ch-menu, .ch-menu--helpers');
  var $navDropdown       = $('.ch-nav .ch-dropdown');
  var $search            = $('.ch-search');
  var $dropdownContainer = $('.ch-dropdown');
  var $sidebar           = $('.ch-sidebar');
  var $modalOverlay      = $('.ch-overlay');

  var openMenu = function(e) {
    e.preventDefault();
    $navMenuElements.addClass('open');
    $navDropdown.addClass('collapse');
  }

  var closeMenu = function() {
    $navMenuElements.removeClass('open');
    $navDropdown.removeClass('collapse visible');
  }

  // var openSearch = function(e) {
  //   e.preventDefault();
  //   $search.show();
  //   $search.find('.ch-search-results').hide();
  //   $search.find('.ch-search-form-input').val('').focus();
  // }

  // var toggleSearchResults = function() {
  //   var $searchResults = $search.find('.ch-search-results');

  //   $(this).val() === '' ? $searchResults.slideUp(300) : $searchResults.slideDown(300);
  // }

  // var removeSearchContext = function() {
  //   $search.find('.ch-search-context').fadeOut(300);
  //   $search.find('.ch-search-form-input').focus();
  // }

  var openModal = function(e) {
    e.preventDefault();
    var $targetModal = $(this).data('modal'),
        $modal = $('.ch-sidebar[data-modal="' + $targetModal + '"');

    $modal.show(300);
    $modal.find('.ch-sidebar-container, .btn-action').addClass('active');
  }

  var closeModal = function() {
    if ($search.is(':visible') && !$sidebar.is('visible')) {
      $search.hide(300);
    } else {
      $search.hide(300);
      $sidebar.find('.ch-sidebar-container, .btn-action').removeClass('active');
      $sidebar.hide(300);
    }
  }

  var closeOnEscape = function(e) {
    var code = e.keyCode || e.which;
    if ( code === 27 && $modalOverlay.is(':visible')) { closeModal(); }
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
    var $container;

    if ( $(window).width() <= 768 ) {
      $container = $nav;

      if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        closeMenu();
        $container.unbind('mouseup');
      }
    } else {
      $container = $dropdownContainer;

      if (!$container.is(e.target) &&
        $container.has(e.target).length === 0 &&
        $container.parent().has(e.target).length === 0)
      {
        $container.removeClass('visible');
        $container.unbind('mouseup');
      }
    }
  }

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
    $(document).on('click', '.btn-show-menu', openMenu);

    $(document).on('click', '.btn-close-menu', closeMenu);

    $(document).on('click', '.dropdown-toggle, .dropdown-hover', openDropdown);

    // $(document).on('click', '.btn-search', openSearch);

    $(document).on('click', '.btn-modal', openModal);

    $(document).on('click', '.ch-overlay, .btn-close', closeModal);

    $(document).on('click', '.ch-search-content, .ch-sidebar-container', function(e) { e.stopPropagation(); });

    // $(document).on('input', '.ch-search-form-input', toggleSearchResults);

    // $(document).on('click', '.btn-remove-context', removeSearchContext);

    $(document).on('click', '.js-show-detail', toggleDetailView);

    $(document).on('click', '.row-link', clickableRow);

    $(document).on('click', '.btn-collapse', toggleSidebarCollapse);

    $(document).on({
      mouseup: function(e) { closeDropdown(e); },
      keydown: function(e) { closeOnEscape(e); }
    });

    $(window).resize(function() {
      if ( $(window).width() >= 768 ) { closeMenu(); }
    });
  };

  var init = function() {
    bindFunctions();
  };

  return {
    init: init
  };

})();


$(document).ready(function() {

  chameleon.init();

  $.fn.switchClass = function(class1, class2) {
    if (this.hasClass(class1)) {
      this.removeClass(class1);
      this.addClass(class2);
    } else {
      this.removeClass(class2);
      this.addClass(class1);
    }
  };

});
