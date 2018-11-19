$(document).ready(function() {
  /*** SEMANTIC UI **/

  $('.ui.dropdown').dropdown({
      showOnFocus: false
    })
  ;

  $('.ui.checkbox').checkbox();

  $('.bind-popup')
    .popup({
      inline: true
    });
  ;

  $('.ui.info')
    .popup({
      inline: true,
      on: 'hover'
    })
  ;

  $('.ui.sticky')
    .sticky({
      context: '#report-form'
    })
  ;

  $('.menu .item').tab();

})
