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

//CHAMELEON NOTIFICATIONS

$('.ch-button.green').on('click', function(e) {
  e.preventDefault()
  $(this).notify({
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'success',
    icon: 'check',
  });
})

$('.ch-button.red').on('click', function(e) {
  e.preventDefault()
  $(this).notify({
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
  $(this).notify({
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
  $(this).notify({
    title: 'Warning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'warning',
    icon: 'warning',
    position: 'top left',
  });
})

$('.ch-button.grey').on('click', function(e) {
  e.preventDefault()
  $(this).notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    icon: 'warning',
    position: 'top center'
  });
})

$('.ch-button.black').on('click', function(e) {
  e.preventDefault()
  $(this).notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    icon: 'warning',
    position: 'bottom center',
    animationEntrance: 'bounceInUp',
    animationExit: 'bounceOutDown'
  });
})

//SEMANTIC UI NOTIFICATIONS

$('.ui.semantic.button.green').on('click', function(e) {
  e.preventDefault()
  $(this).notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    theme: 'semanticUI',
    className: 'positive',
    icon: 'check',
    title: 'Success',
    position: 'top center',
  });
})

$('.ui.semantic.button.red').on('click', function(e) {
  e.preventDefault()
  $(this).notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    theme: 'semanticUI',
    className: 'negative',
    position: 'top center'
  });
})

$('.ui.semantic.button.blue').on('click', function(e) {
  e.preventDefault()
  $(this).notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    theme: 'semanticUI',
    className: 'blue',
    icon: 'info',
    position: 'top center'
  });
})

$('.ui.semantic.button.yellow').on('click', function(e) {
  e.preventDefault()
  $(this).notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    theme: 'semanticUI',
    className: 'yellow',
    position: 'top center'
  });
})
