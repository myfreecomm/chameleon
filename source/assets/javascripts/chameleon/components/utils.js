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

  var pluginName = "messenger";

  const Messenger = function(message, options) {

    let settings = $.extend({
      className: '',
      message: message,
      timeout: 3000,
      animationEntrance: 'bounceInDown',
      animationExit: 'bounceOutUp'
    }, options)

    if ( $('.ch-message--fixed').length === 0 ) {
      $('body').append(`<ul class="ch-message ch-message--fixed"></ul>`);
    }

    let messageTemplate = $(`<li class="ui message compact tiny ${settings.className} ${settings.animationEntrance} animated">${settings.message}</li>`);

    let elem = messageTemplate.appendTo('.ch-message--fixed');

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

  $[pluginName] = Messenger;
  $.fn[pluginName] = Messenger;

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
