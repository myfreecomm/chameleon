'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

if (window.Chameleon === undefined) {
  window.Chameleon = {};
}
if (window.Chameleon.Components === undefined) {
  window.Chameleon.Components = {};
}
if (window.Chameleon.Plugins === undefined) {
  window.Chameleon.Plugins = {};
}

Chameleon.init = function () {

  var components = Object.keys(Chameleon.Components).map(function (key) {
    var component = Chameleon.Components[key];
    Chameleon[key.toLowerCase()] = new component();
  });

  Chameleon.notifications = new Chameleon.Plugins.Notification();
};

$(document).ready(function () {
  Chameleon.init();
});

Chameleon.Plugins.Notification = function () {
  var setTemplate = function setTemplate(settings) {
    var template = '';

    switch (settings.theme) {
      case 'chameleon':
        template = '<li class="ch-notification ch-notification--' + settings.type + ' ' + settings.animationEntrance + ' animated">\n            <div class="ch-notification-icon">\n              <i class="icon circular large ' + settings.icon + '"></i>\n            </div>\n            <div class="ch-notification-content">\n              <span class="ch-notification-title">' + settings.title + '</span>\n              <p class="ch-notification-message">' + settings.description + '</p>\n            </div>\n            <button class="ch-notification-button--close">\n              <i class="icon close large"></i>\n            </button>\n          </li>';
        break;
      case 'semanticUI':
        var icon = settings.icon !== '' ? '<i class="' + settings.icon + ' tiny icon"></i>' : '';

        template = '<li class="ui icon message tiny ' + settings.className + ' ' + settings.animationEntrance + ' animated">\n            ' + icon + '\n            <div class="content">\n              <div class="header">' + settings.title + '</div>\n              ' + settings.description + '\n            </div>\n          </li>';
        break;
    }

    return template;
  };

  var setContainer = function setContainer(settings) {

    var container = 'ch-notification-container ' + settings.position;
    var containerClasses = '.' + container.replace(/ +/g, '.');

    if ($(containerClasses).length === 0) {
      $('body').append('<ul class="' + container + '"></ul>');
    }

    return containerClasses;
  };

  var buildHTML = function buildHTML(settings) {

    var template = setTemplate(settings);
    var container = setContainer(settings);

    return { template: template, container: container };
  };

  var destroy = function destroy(element, settings) {
    setTimeout(function () {
      $(element).removeClass(settings.animationEntrance);
      $(element).addClass(settings.animationExit);
      setTimeout(function () {
        return $(element).remove();
      }, 1000);
    }, 750);
  };

  var Notification = function Notification(options) {

    var settings = $.extend({
      className: '',
      title: '',
      description: '',
      type: 'default',
      theme: 'chameleon',
      icon: '',
      position: 'top right',
      timeout: 3000,
      animationEntrance: 'bounceInDown',
      animationExit: 'bounceOutUp'
    }, options);

    var build = function build() {
      var notification = buildHTML(settings);

      var elem = $(notification.template).appendTo(notification.container);

      if (!settings.timeout == 0) {
        setTimeout(function () {
          return destroy(elem, settings);
        }, settings.timeout);
      }

      $(document).on('click', '.ch-notification-button--close', function () {
        if ($(elem).is(':visible')) {
          destroy($(this).parent(), settings);
        }
      });
    };

    typeof this === 'function' ? build() : $(this).on('click', build);
  };

  var pluginName = "notify";

  $[pluginName] = Notification;
  $.fn[pluginName] = Notification;
};

Chameleon.Components.Dropdown = function () {
  var dropdownButtons = document.querySelectorAll('.ch-dropdown-toggle');
  var dropdownCloseButtons = document.querySelectorAll('.ch-dropdown .btn-close');

  var show = function show(dropdownMenu) {
    dropdownMenu.classList.add('visible');
    dropdownMenu.parentElement.classList.add('active');

    definePosition(dropdownMenu);
  };

  var hide = function hide(dropdownMenu) {
    dropdownMenu.classList.remove('visible');
    dropdownMenu.parentElement.classList.remove('active');
  };

  var toggle = function toggle(dropdownMenu) {
    if (dropdownMenu.classList.contains('visible') === false) {
      show(dropdownMenu);
    } else {
      hide(dropdownMenu);
    }
  };

  var definePosition = function definePosition(dropdownMenu) {
    var _dropdownMenu$classLi, _dropdownMenu$classLi2;

    var validPositions = ['top', 'right', 'left', 'bottom'];
    var initialPosition = "";

    (_dropdownMenu$classLi = dropdownMenu.classList).remove.apply(_dropdownMenu$classLi, validPositions);
    if (dropdownMenu.dataset.position) {
      initialPosition = dropdownMenu.dataset.position.split(" ");
    } else {
      initialPosition = ['bottom', 'right'];
    }

    (_dropdownMenu$classLi2 = dropdownMenu.classList).add.apply(_dropdownMenu$classLi2, _toConsumableArray(initialPosition));

    positionLastResort(dropdownMenu);
  };

  var positionLastResort = function positionLastResort(dropdownMenu) {
    //TODO: Improve this
    if ($(dropdownMenu).offset().left < 0) {
      dropdownMenu.classList.remove('right');
      dropdownMenu.classList.add('left');
    }

    if (document.body.scrollWidth > window.innerWidth) {
      dropdownMenu.classList.remove('left');
      dropdownMenu.classList.add('right');
    }
  };

  var close = function close(button) {
    button.addEventListener('click', function (dropdownMenu) {
      hide(this.offsetParent);
    });
  };

  dropdownCloseButtons.forEach(close);

  var dropdown = function dropdown(event) {
    dropdownButtons.forEach(function (button) {
      var dropdownMenu = button.nextElementSibling;

      if (event.target === button || event.target.parentElement === button) {
        toggle(dropdownMenu);
      } else if (event.target.offsetParent === dropdownMenu) {
        return;
      } else {
        hide(dropdownMenu);
      }
    });
  };

  document.addEventListener('click', dropdown);
};

Chameleon.Components.Menu = function () {
  var Selector = {
    button: '.ch-menu-item .ch-dropdown-button',
    collapseButton: '.ch-expand-button > button',
    navContainer: '.ch-nav',
    navMenu: '.ch-menu',
    navHeader: '.ch-header-nav',
    moreOptionsButton: '.btn-more-options',
    toggleButton: '[data-toogle="nav"]',
    DROPDOWN: '.ch-dropdown',
    logo: '.ch-logo',
    navElements: '.ch-nav, .ch-nav > .ch-menu'
  };

  var toggleMenuDropdown = function toggleMenuDropdown() {
    var $dropdown = $(this).parent(Selector.dropdown);
    var $dropdownSiblings = $dropdown.siblings();

    if ($dropdownSiblings.hasClass('open')) {
      $dropdownSiblings.removeClass('open');
    }
    $dropdown.toggleClass('open');

    if ($(window).width() <= 768 && !$(Selector.navContainer).hasClass('active')) {
      toggleNav();
    }
  };

  var toogleLogoShadow = function toogleLogoShadow() {
    if ($(this).scrollTop() > 0) {
      $(Selector.logo).addClass('has-shadow');
    } else {
      $(Selector.logo).removeClass('has-shadow');
    }
  };

  var toggleNavCollapse = function toggleNavCollapse() {
    if ($(Selector.navContainer).hasClass('hover')) {
      $(Selector.navContainer).removeClass('hover');
    }

    $(Selector.navContainer).toggleClass('collapsed');
  };

  var toggleNav = function toggleNav() {
    $(Selector.navContainer).toggleClass('active');
    $(Selector.toogleButton).find('.fa-icon').switchClass('fa-ellipsis-h-alt', 'fa-times');

    if (!$(Selector.navContainer).hasClass('active')) {
      $(Selector.dropdown).removeClass('open');
    }
  };

  var moreOptions = function moreOptions() {
    $(Selector.navHeader).toggleClass('active');
    $(this).find('.fa-icon').switchClass('fa-angle-double-left', 'fa-angle-double-right');
  };

  var showMenu = function showMenu() {
    if ($(Selector.navContainer).hasClass('collapsed')) {
      $(Selector.navContainer).addClass('hover');
    }
  };

  var hideMenu = function hideMenu() {
    if ($(Selector.navContainer).hasClass('collapsed')) {
      $(Selector.navContainer).removeClass('hover');
    }
  };

  $(document).on('click', Selector.button, toggleMenuDropdown);
  $(document).on('click', Selector.collapseButton, toggleNavCollapse);
  $(document).on('click', Selector.toggleButton, toggleNav);
  $(document).on('click', Selector.moreOptionButton, moreOptions);
  $(document).on('mouseenter', Selector.navElements, showMenu);
  $(document).on('mouseleave', Selector.navContainer, hideMenu);
  $(Selector.navMenu).on('scroll', toogleLogoShadow);
};

Chameleon.Components.Modal = function () {
  var $modal = $('.ch-dialog');

  var open = function open(e) {
    e.preventDefault();
    var modalType = $(this).data('modal'),
        $targetModal = $('[data-modal=' + modalType);

    $targetModal.show(300);
    $targetModal.find('.ch-dialog-container, .action-dialog').addClass('active');
    $targetModal.focus();
  };

  var close = function close() {
    $modal.find('.ch-dialog-container, .action-dialog').removeClass('active');
    $modal.hide(300);
  };

  $(document).on('click', '[data-target="modal"]', open);

  $(document).on('click', '.ch-overlay, .btn-close-dialog', close);

  $modal.on('keydown', function (e) {
    $.keyboardClose(e, close);
  });

  $(document).on('click', '.ch-dialog-container', function (e) {
    e.stopPropagation();
  });
};

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

  $(document).on('click', '[data-target="search"]', open);

  $(document).on('click', '.ch-search-content', function (e) {
    e.stopPropagation();
  });

  $(document).on('click', '.ch-search .btn-close, .ch-overlay', close);

  $search.on('keydown', function (e) {
    $.keyboardClose(e, close);
  });

  $(document).on('input', '.ch-search-form-input', toggleResults);
};

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
    var $container = $(this).prev('.ch-sidebar'),
        $collapseButton = $(this);

    $collapseButton.find('.icon').switchClass('right', 'left');
    $collapseButton.toggleClass('inactive');
    $container.toggleClass('inactive');
  };

  $(document).on('click', '[data-table-detail="toggle"]', toggleDetailView);

  $(document).on('click', '.row-link', clickableRow);

  $(document).on('click', '[data-sidebar="toggle"]', toggleSidebarCollapse);
};

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

  $.keyboardClose = function (e, closeFunction) {
    var code = e.keyCode || e.which;
    if (code === 27 && $('.ch-overlay').is(':visible')) {
      closeFunction();
    }
  };
}();