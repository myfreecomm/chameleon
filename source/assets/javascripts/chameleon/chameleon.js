if (window.Chameleon === undefined) { window.Chameleon = {}; }
if (window.Chameleon.Components === undefined) { window.Chameleon.Components = {}; }
if (window.Chameleon.Plugins === undefined) { window.Chameleon.Plugins = {}; }

Chameleon.init = function() {
  let components = Object.values(Chameleon.Components);

  components.forEach( component => component.init() );
}

$(document).ready(function() {
  Chameleon.init();
});
