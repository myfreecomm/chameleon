if (window.Chameleon === undefined) { window.Chameleon = {}; }

var App = (function(){

  var init = function() {
    window.Chameleon.Search.init();
    window.Chameleon.Dropdown.init();
    window.Chameleon.Modal.init();
    window.Chameleon.Menu.init();
    window.Chameleon.Table.init();
  };

  return {
    init: init
  };

})();

$(document).ready(function() {

  App.init();

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
