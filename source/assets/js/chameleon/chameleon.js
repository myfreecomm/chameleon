if (window.Chameleon === undefined) { window.Chameleon = {}; }
if (window.Chameleon.Components === undefined) { window.Chameleon.Components = {}; }

Chameleon.init = function() {
  let chameleonComponents = Object.values(Chameleon.Components);

  chameleonComponents.forEach( component => component.init() );
}

$(document).ready(function() {
  Chameleon.init();
});
