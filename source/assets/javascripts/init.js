var slider = document.getElementById('slider');

if (slider) {
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
}

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

$('#rangestart').calendar({
  type: 'date',
  endCalendar: $('#rangeend')
});

$('#rangeend').calendar({
  type: 'date',
  startCalendar: $('#rangestart'),
  popupOptions: {
    position: 'bottom right',
    lastResort: 'bottom right'
  }
});

$('.ch-button.green').on('click', function(e) {
  e.preventDefault()
  $(this).notify('chameleon', {
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'success',
    icon: 'check',
  });
})

//CHAMELEON NOTIFICATIONS

$('.ch-button.red').on('click', function(e) {
  e.preventDefault()
  $(this).notify('chameleon', {
    title: 'Danger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'danger',
    icon: 'remove',
    position: 'bottom right',
    animationEntrance: 'bounceInUp',
    animationExit: 'bounceOutDown'
  });
})

$('.ch-button.blue').on('click', function(e) {
  e.preventDefault()
  $(this).notify('chameleon', {
    title: 'Info',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'info',
    icon: 'info',
    position: 'bottom left',
    animationEntrance: 'bounceInUp',
    animationExit: 'bounceOutDown'
  });
})

$('.ch-button.yellow').on('click', function(e) {
  e.preventDefault()
  $(this).notify('chameleon', {
    title: 'Warning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'warning',
    icon: 'warning',
    position: 'top left',
  });
})

//SEMANTIC UI NOTIFICATIONS

$('.ui.semantic.button.green').on('click', function(e) {
  e.preventDefault()
  $(this).notify('semanticUI', {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    className: 'positive',
    icon: 'check',
    title: 'Success',
    position: 'top center',
  });
})

$('.ui.semantic.button.red').on('click', function(e) {
  e.preventDefault()
  $(this).notify('semanticUI', {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    className: 'negative',
    position: 'top center'
  });
})

$('.ui.semantic.button.blue').on('click', function(e) {
  e.preventDefault()
  $(this).notify('semanticUI', {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    className: 'blue',
    icon: 'info',
    position: 'top center'
  });
})

$('.ui.semantic.button.yellow').on('click', function(e) {
  e.preventDefault()
  $(this).notify('semanticUI', {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    className: 'yellow',
    position: 'top center'
  });
})
