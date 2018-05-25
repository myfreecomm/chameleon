if (window.Chameleon === undefined) { window.Chameleon = {}; }
if (window.Chameleon.Components === undefined) { window.Chameleon.Components = {}; }
if (window.Chameleon.Plugins === undefined) { window.Chameleon.Plugins = {}; }

Chameleon.init = function() {

  let components = Object.keys(Chameleon.Components).map( key => {
    let component = Chameleon.Components[key];
    Chameleon[key.toLowerCase()] = new component();
  });

  Chameleon.notifications = new Chameleon.Plugins.Notification();

}

$(document).ready(function() {
  Chameleon.init();
});
