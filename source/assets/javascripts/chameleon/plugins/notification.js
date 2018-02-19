Chameleon.Plugins.Notification = (function() {
  const notificationTemplate = function(settings) {
    let template = '';

    switch(settings.theme) {
      case 'chameleon':
        template =
          `<li class="ch-notification ch-notification--${settings.type} ${settings.animationEntrance} animated">
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
          </li>`
        ;
        break;
      case 'semanticUI':
       let icon = settings.icon !== '' ? `<i class="${settings.icon} tiny icon"></i>` : ''

        template =
          `<li class="ui icon message tiny ${settings.className} ${settings.animationEntrance} animated">
            ${icon}
            <div class="content">
              <div class="header">${settings.title}</div>
              ${settings.description}
            </div>
          </li>`
        ;
        break;
    }

    return template
  }

  const notificationContainer = function(settings) {

    let container = `ch-notification-container ${settings.position}`;
    let containerClasses = '.' + container.replace(/ +/g, '.') ;

    if ( $(containerClasses).length === 0 ) {
      $('body').append(`<ul class="${container}"></ul>`);
    }

    return containerClasses;
  }

  const notificationDefinitions = function(settings) {

    let template = notificationTemplate(settings);
    let container = notificationContainer(settings);

    return { template, container };
  }

  const destroyNotification = function(element, settings) {
    setTimeout(() => {
      $(element).removeClass(settings.animationEntrance);
      $(element).addClass(settings.animationExit);
      setTimeout(() => $(element).remove(), 1000);
    }, 750);
  }

  const Notification = function(options) {

    let settings = $.extend({
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
    }, options)

    let notification = notificationDefinitions(settings);

    let elem = $(notification.template).appendTo(notification.container);

    if (!settings.timeout == 0) {
      setTimeout(() => destroyNotification(elem, settings), settings.timeout);
    }

    $(document).on('click', '.ch-notification-button--close', function() {
      if ( $(elem).is(':visible') ) {
        destroyNotification($(this).parent(), settings);
      }
    });
  }

  let pluginName = "notify";

  $[pluginName] = Notification;
  $.fn[pluginName] = Notification;
})();

