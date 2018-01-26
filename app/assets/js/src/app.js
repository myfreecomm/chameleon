if (window.Chameleon === undefined) { window.Chameleon = {}; }

Chameleon.init = function() {
  Chameleon.Search.init();
  Chameleon.Dropdown.init();
  Chameleon.Modal.init();
  Chameleon.Menu.init();
  Chameleon.Table.init();
}

$(document).ready(function() {
  Chameleon.init();
});
