$(document).ready(function() {
    $("#menu").mmenu({
       slidingSubmenus: false,
       classes: "mm-slide",
       labels: true
    });

    $("#modal").mmenu({
      offCanvas: {
        position: "right"
      },
       slidingSubmenus: false,
       classes: "mm-slide",
       labels: true
    });
 });
