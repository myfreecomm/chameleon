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