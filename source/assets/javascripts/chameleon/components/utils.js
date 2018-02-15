Chameleon.Utils = (function() {

  $.fn.switchClass = function(class1, class2) {
    if (this.hasClass(class1)) {
      this.removeClass(class1);
      this.addClass(class2);
    } else {
      this.removeClass(class2);
      this.addClass(class1);
    }
  }

  var pluginName = "notify";

  const notificationTemplate = function(type, settings) {
    let template = '';

    switch(type) {
      case 'notification':
        template = `<li class="ch-notification ch-notification--${settings.type} ${settings.animationEntrance} animated">
              <div class="ch-notification-icon">
                <i class="icon circular large ${settings.icon}"></i>
              </div>
              <div class="ch-notification-content">
                <span class="ch-notification-title">${settings.title}</span>
                <p class="ch-notification-message">${settings.message}</p>
              </div>
              <button class="ch-notification-button--close">
                <i class="icon close large"></i>
              </button>
            </li> `;
        break;
      case 'message':
        template = `<li class="ui message compact tiny ${settings.className} ${settings.animationEntrance} animated">${settings.message}</li>`;
        break;
    }

    return template
  }

  const notificationContainer = function(type) {
    let container = '';

    switch(type) {
      case 'notification':
        container = '.ch-notification-container';
        if ( $('.ch-notification-container').length === 0 ) {
          $('body').append(`<ul class="ch-notification-container top right"></ul>`);
        }
        break;
      case 'message':
        container = '.ch-message--fixed';
        if ( $('.ch-message--fixed').length === 0 ) {
          $('body').append(`<ul class="ch-message ch-message--fixed"></ul>`);
        }
        break;
    }

    return container;
  }

  const notificationDefinitions = function(type, settings) {

    let template = notificationTemplate(type, settings);
    let container = notificationContainer(type, settings);

    return { template, container };
  }

  const Notification = function(type, options) {

    let settings = $.extend({
      className: '',
      title: '',
      message: '',
      type: '',
      icon: '',
      timeout: 3000,
      animationEntrance: 'bounceInDown',
      animationExit: 'bounceOutUp'
    }, options)

    let notification = notificationDefinitions(type, settings);

    let elem = $(notification.template).appendTo(notification.container);

    if (!settings.timeout == 0) {
      setTimeout(() => destroyMessage(elem), settings.timeout);
    }

    function destroyMessage(element) {
      setTimeout(() => {
        $(element).removeClass(settings.animationEntrance);
        $(element).addClass(settings.animationExit);
        setTimeout(() => $(element).remove(), 1000);
      }, 750);
    }
  }

  $[pluginName] = Notification;
  $.fn[pluginName] = Notification;

  const keyboardClose = function(e, closeFunction) {
    let code = e.keyCode || e.which;
    if ( code === 27 && $('.ch-overlay').is(':visible')) {
      closeFunction();
    }
  }

  return {
    keyboardClose: keyboardClose
  }
})();
