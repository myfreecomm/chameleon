if (window.Chameleon === undefined) { window.Chameleon = {}; }

var App = (function(){

  var init = function() {
    window.Chameleon.Search.init();
    window.Chameleon.Dropdown.init();
    window.Chameleon.Modal.init();
    window.Chameleon.Menu.init();
    window.Chameleon.Table.init();
    window.Chameleon.Utils;
  };

  return {
    init: init
  };

})();

$(document).ready(function() {
  App.init();
});
