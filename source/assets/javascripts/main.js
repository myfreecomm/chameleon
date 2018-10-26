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
    dropdown: '.ch-dropdown',
    logo: '.ch-logo',
    navElements: '.ch-nav, .ch-nav > .ch-menu',
    icon: '.fa-icon',
    header: '.ch-header'
  };

  var ClassName = {
    open: 'open',
    active: 'active',
    hover: 'hover',
    collapsed: 'collapsed',
    hasShadow: 'has-shadow',
    sticky: 'sticky'
  };

  var toggleMenuDropdown = function toggleMenuDropdown() {
    var $dropdown = $(this).parent(Selector.dropdown);
    var $dropdownSiblings = $dropdown.siblings();

    if ($dropdownSiblings.hasClass(ClassName.open)) {
      $dropdownSiblings.removeClass(ClassName.open);
    }

    $dropdown.toggleClass(ClassName.open);

    if ($(window).width() <= 768 && !$(Selector.navContainer).hasClass(ClassName.active)) {
      toggleNav();
    }
  };

  var toogleLogoShadow = function toogleLogoShadow() {
    if ($(this).scrollTop() > 0) {
      $(Selector.logo).addClass(ClassName.hasShadow);
    } else {
      $(Selector.logo).removeClass(ClassName.hasShadow);
    }
  };

  var toggleNavCollapse = function toggleNavCollapse() {
    if ($(Selector.navContainer).hasClass(ClassName.hover)) {
      $(Selector.navContainer).removeClass(ClassName.hover);
    }

    $(Selector.navContainer).toggleClass(ClassName.collapsed);
  };

  var toggleNav = function toggleNav() {
    $(Selector.navContainer).toggleClass(ClassName.active);
    $(Selector.toggleButton).find(Selector.icon).switchClass('fa-ellipsis-h-alt', 'fa-times');

    if (!$(Selector.navContainer).hasClass(ClassName.active)) {
      $(Selector.dropdown).removeClass(ClassName.open);
    }
  };

  var moreOptions = function moreOptions(event) {
    $(Selector.navHeader).toggleClass(ClassName.active);
    $(this).find(Selector.icon).switchClass('fa-angle-double-left', 'fa-angle-double-right');
  };

  var showMenu = function showMenu() {
    if ($(Selector.navContainer).hasClass(ClassName.collapsed)) {
      $(Selector.navContainer).addClass(ClassName.hover);
    }
  };

  var hideMenu = function hideMenu() {
    if ($(Selector.navContainer).hasClass(ClassName.collapsed)) {
      $(Selector.navContainer).removeClass(ClassName.hover);
    }
  };

  var stickyHeader = function stickyHeader() {
    if ($(window).scrollTop() > 0) {
      $(Selector.header).addClass(ClassName.sticky);
    } else {
      $(Selector.header).removeClass(ClassName.sticky);
    }
  };

  $(document).on('click', Selector.button, toggleMenuDropdown);
  $(document).on('click', Selector.collapseButton, toggleNavCollapse);
  $(document).on('click', Selector.toggleButton, toggleNav);
  $(document).on('click', Selector.moreOptionsButton, moreOptions);
  $(document).on('mouseenter', Selector.navElements, showMenu);
  $(document).on('mouseleave', Selector.navContainer, hideMenu);
  $(Selector.navMenu).on('scroll', toogleLogoShadow);
  $(document).on('scroll', stickyHeader);
};

Chameleon.Components.Modal = function () {
  var Selector = {
    dialog: '.ch-dialog',
    dialogElements: '.ch-dialog-container, .action-dialog',
    dialogContainer: '.ch-dialog-container',
    modals: '[data-target="modal"]',
    closeTargets: '.ch-overlay, .btn-close-dialog'
  };

  var ClassName = {
    active: 'active'
  };

  var $modal = $(Selector.dialog);

  var open = function open(e) {
    e.preventDefault();
    var modalType = $(this).data('modal'),
        $targetModal = $('[data-modal=' + modalType);

    $targetModal.show(300);
    $targetModal.find(Selector.dialogElements).addClass(ClassName.active);
    $targetModal.focus();
  };

  var close = function close() {
    $modal.find(Selector.dialogElements).removeClass(ClassName.active);
    $modal.hide(300);
  };

  $(document).on('click', Selector.modals, open);

  $(document).on('click', Selector.closeTargets, close);

  $modal.on('keydown', function (e) {
    $.keyboardClose(e, close);
  });

  $(document).on('click', Selector.dialogContainer, function (e) {
    e.stopPropagation();
  });
};

Chameleon.Components.Search = function () {
  var Selector = {
    searchButtonTarget: '[data-target="search"]',
    searchContainer: '.ch-search',
    searchResults: '.ch-search-results',
    searchInput: '.ch-search-form-input',
    searchContent: '.ch-search-content',
    modal: '.ch-sidebar',
    closeButtonsTargets: '.ch-search .btn-close, .ch-overlay'
  };

  var $search = $(Selector.searchContainer);
  var $searchResults = $search.find(Selector.searchResults);
  var $modal = $(Selector.modal);

  var open = function open(e) {
    e.preventDefault();
    $search.show();
    $search.find(Selector.searchResults).hide();
    $search.find(Selector.searchInput).val('').focus();
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

  $(document).on('click', Selector.searchButtonTarget, open);

  $(document).on('click', Selector.searchContent, function (e) {
    e.stopPropagation();
  });

  $(document).on('click', Selector.closeButtonsTargets, close);

  $search.on('keydown', function (e) {
    $.keyboardClose(e, close);
  });

  $(document).on('input', Selector.searchInput, toggleResults);
};

Chameleon.Components.Table = function () {
  var Selector = {
    icon: '.icon',
    sidebar: '.ch-sidebar',
    detailsTarget: '[data-table-detail="toggle"]',
    rowLink: '.row-link',
    sidebarTarget: '[data-sidebar="toggle"]'
  };

  var ClassName = {
    right: 'right',
    left: 'left',
    inactive: 'inactive',
    up: 'up',
    down: 'down',
    hidden: 'hidden'
  };

  var clickableRow = function clickableRow() {
    var sel = getSelection().toString();

    if (!sel) {
      window.location = $(this).data("href");
    }
  };

  var toggleDetailView = function toggleDetailView(e) {
    e.stopPropagation();
    var $detailRow = $(this).parents('tr').next('tr'),
        $buttonIcon = $(this).find(Selector.icon);

    $detailRow.toggleClass(ClassName.hidden);
    $buttonIcon.switchClass(ClassName.down, ClassName.up);
  };

  var toggleSidebarCollapse = function toggleSidebarCollapse() {
    var $container = $(this).prev(Selector.sidebar),
        $collapseButton = $(this);

    $collapseButton.find(Selector.icon).switchClass(ClassName.right, ClassName.left);
    $collapseButton.toggleClass(ClassName.inactive);
    $container.toggleClass(ClassName.inactive);
  };

  $(document).on('click', Selector.detailsTarget, toggleDetailView);

  $(document).on('click', Selector.rowLink, clickableRow);

  $(document).on('click', Selector.sidebarTarget, toggleSidebarCollapse);
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