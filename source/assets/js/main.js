'use strict';

if (window.Chameleon === undefined) {
  window.Chameleon = {};
}
if (window.Chameleon.Components === undefined) {
  window.Chameleon.Components = {};
}

Chameleon.init = function () {
  var chameleonComponents = Object.values(Chameleon.Components);

  chameleonComponents.forEach(function (component) {
    return component.init();
  });
};

$(document).ready(function () {
  Chameleon.init();
});

Chameleon.Components.Dropdown = function () {
  var $nav = $('.ch-nav');
  var $dropdownContainer = $('.ch-dropdown');

  var open = function open(e) {
    e.preventDefault();
    if ($(this).siblings().hasClass('visible')) {
      $dropdownContainer.removeClass('visible');
    } else {
      $dropdownContainer.removeClass('visible');
      $(this).siblings().addClass('visible');
    }
  };

  var closeOnMobile = function closeOnMobile(event, $container) {
    if (!$container.is(event.target) && $container.has(event.target).length === 0) {
      Chameleon.Components.Menu.close();
      $container.unbind('mouseup');
    }
  };

  var closeOnDesktop = function closeOnDesktop(event, $container) {
    if (!$container.is(event.target) && $container.has(event.target).length === 0 && $container.parent().has(event.target).length === 0) {
      $container.removeClass('visible');
      $container.unbind('mouseup');
    }
  };

  var close = function close(e) {
    $(window).width() <= 768 ? closeOnMobile(e, $nav) : closeOnDesktop(e, $dropdownContainer);
  };

  var bindFunctions = function bindFunctions() {
    $(document).on('click', '.dropdown-toggle, .dropdown-hover', open);

    $(document).on('mouseup', function (e) {
      close(e);
    });
  };

  var init = function init() {
    bindFunctions();
  };

  return {
    init: init
  };
}();

Chameleon.Components.Menu = function () {
  var $navMenuElements = $('.ch-nav, .ch-menu, .ch-menu--helpers');
  var $navDropdown = $('.ch-nav .ch-dropdown');

  var open = function open(e) {
    e.preventDefault();
    $navMenuElements.addClass('open');
    $navDropdown.addClass('collapse');
  };

  var close = function close() {
    $navMenuElements.removeClass('open');
    $navDropdown.removeClass('collapse visible');
  };

  var bindFunctions = function bindFunctions() {
    $(document).on('click', '.btn-show-menu', open);

    $(document).on('click', '.btn-close-menu', close);

    $(window).resize(function () {
      if ($(window).width() >= 768) {
        close();
      }
    });
  };

  var init = function init() {
    bindFunctions();
  };

  return {
    init: init,
    close: close
  };
}();

Chameleon.Components.Modal = function () {
  var $modal = $('.ch-sidebar');

  var open = function open(e) {
    e.preventDefault();
    var modalType = $(this).data('modal'),
        $targetModal = $('[data-modal=' + modalType);

    $targetModal.show(300);
    $targetModal.find('.ch-sidebar-container, .btn-action').addClass('active');
    $targetModal.focus();
  };

  var close = function close() {
    $modal.find('.ch-sidebar-container, .btn-action').removeClass('active');
    $modal.hide(300);
  };

  var bindFunctions = function bindFunctions() {
    $(document).on('click', '.btn-modal', open);

    $(document).on('click', '.ch-overlay, .btn-close', close);

    $modal.on('keydown', function (e) {
      Chameleon.Utils.keyboardClose(e, close);
    });

    $(document).on('click', '.ch-sidebar-container', function (e) {
      e.stopPropagation();
    });
  };

  var init = function init() {
    bindFunctions();
  };

  return {
    init: init
  };
}();

Chameleon.Components.Search = function () {
  var $search = $('.ch-search');
  var $searchResults = $search.find('.ch-search-results');
  var $modal = $('.ch-sidebar');

  var open = function open(e) {
    e.preventDefault();
    $search.show();
    $search.find('.ch-search-results').hide();
    $search.find('.ch-search-form-input').val('').focus();
  };

  var close = function close() {
    $search.hide(300);

    if ($modal.find('.inside').is(':visible')) {
      $modal.focus();
    }
  };

  var toggleResults = function toggleResults() {
    $(this).val() === '' ? $searchResults.slideUp(300) : $searchResults.slideDown(300);
  };

  var removeContext = function removeContext() {
    $search.find('.ch-search-context').fadeOut(300);
    $search.find('.ch-search-form-input').focus();
  };

  var bindFunctions = function bindFunctions() {
    $(document).on('click', '.btn-search', open);

    $(document).on('click', '.ch-search-content', function (e) {
      e.stopPropagation();
    });

    $(document).on('click', '.ch-search .btn-close, .ch-overlay', close);

    $search.on('keydown', function (e) {
      Chameleon.Utils.keyboardClose(e, close);
    });

    $(document).on('input', '.ch-search-form-input', toggleResults);

    $(document).on('click', '.btn-remove-context', removeContext);
  };

  var init = function init() {
    bindFunctions();
  };

  return {
    init: init
  };
}();

Chameleon.Components.Table = function () {

  var clickableRow = function clickableRow() {
    var sel = getSelection().toString();

    if (!sel) {
      window.location = $(this).data("href");
    }
  };

  var toggleDetailView = function toggleDetailView(e) {
    e.stopPropagation();
    var $detailRow = $(this).parents('tr').next('tr'),
        $buttonIcon = $(this).find('.icon');

    $detailRow.toggleClass('hidden');
    $buttonIcon.switchClass('down', 'up');
  };

  var toggleSidebarCollapse = function toggleSidebarCollapse() {
    var $container = $(this).prev('.ch-timeline-container'),
        $collapseButton = $(this);

    $collapseButton.find('.icon').switchClass('right', 'left');
    $collapseButton.toggleClass('inactive');
    $container.toggleClass('inactive');
  };

  var bindFunctions = function bindFunctions() {
    $(document).on('click', '.js-show-detail', toggleDetailView);

    $(document).on('click', '.row-link', clickableRow);

    $(document).on('click', '.btn-collapse', toggleSidebarCollapse);
  };

  var init = function init() {
    bindFunctions();
  };

  return {
    init: init
  };
}();

Chameleon.Utils = function () {
  $.fn.switchClass = function (class1, class2) {
    if (this.hasClass(class1)) {
      this.removeClass(class1);
      this.addClass(class2);
    } else {
      this.removeClass(class2);
      this.addClass(class1);
    }
  };

  var keyboardClose = function keyboardClose(e, closeFunction) {
    var code = e.keyCode || e.which;
    if (code === 27 && $('.ch-overlay').is(':visible')) {
      closeFunction();
    }
  };

  return {
    keyboardClose: keyboardClose
  };
}();