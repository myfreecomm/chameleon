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

  $.fn.closeOnEscape = function(e, closeFunction) {
    var code = e.keyCode || e.which;
    if ( code === 27 && $('.ch-overlay').is(':visible')) {
      closeFunction();
    }
  }
})();
