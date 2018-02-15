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
                <p class="ch-notification-message">${settings.description}</p>
              </div>
              <button class="ch-notification-button--close">
                <i class="icon close large"></i>
              </button>
            </li> `;
        break;
      case 'message':
        template = `<li class="ui message compact tiny ${settings.className} ${settings.animationEntrance} animated">${settings.description}</li>`;
        break;
    }

    return template
  }

  const notificationContainer = function(type, settings) {
    let containerMainClass = '',
        containerAllClassesNames = '';

    switch(type) {
      case 'notification':
        containerMainClass = '.ch-notification-container';
        containerAllClassesNames = `ch-notification-container ${settings.position}`;
        break;
      case 'message':
        containerMainClass = '.ch-message--fixed';
        containerAllClassesNames = 'ch-message ch-message--fixed'
        break;
    }

    if ( $(containerMainClass).length === 0 ) {
      $('body').append(`<ul class="${containerAllClassesNames}"></ul>`);
    }

    return containerMainClass;
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
      description: '',
      type: '',
      icon: '',
      position: 'top right',
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

  var pluginName = "notify";

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
