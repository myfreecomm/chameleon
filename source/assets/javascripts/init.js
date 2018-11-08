$(document).ready(function() {
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

  $('.ch-button.green').notify({
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'success',
    icon: 'check',
  });

  $('.ch-button.red').notify({
    title: 'Danger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'danger',
    icon: 'remove',
    position: 'bottom right',
    animationEntrance: 'bounceInUp',
    animationExit: 'bounceOutDown'
  });

  $('.ch-button.blue').notify({
    title: 'Info',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'info',
    icon: 'info',
    position: 'bottom left',
    animationEntrance: 'bounceInUp',
    animationExit: 'bounceOutDown'
  });

  $('.ch-button.yellow').notify({
    title: 'Warning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    type: 'warning',
    icon: 'warning',
    position: 'top left',
  });

  $('.ch-button.grey').notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    icon: 'warning',
    position: 'top center'
  });

  $('.ch-button.black').notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    icon: 'warning',
    position: 'bottom center',
    animationEntrance: 'bounceInUp',
    animationExit: 'bounceOutDown'
  });

  //SEMANTIC UI NOTIFICATIONS

  $('.ui.semantic.button.green').notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    theme: 'semanticUI',
    className: 'positive',
    icon: 'check',
    title: 'Success',
    position: 'top center',
  });

  $('.ui.semantic.button.red').notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    theme: 'semanticUI',
    className: 'negative',
    position: 'top center'
  });

  $('.ui.semantic.button.blue').notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    theme: 'semanticUI',
    className: 'blue',
    icon: 'info',
    position: 'top center'
  });

  $('.ui.semantic.button.yellow').notify({
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, consectetur.',
    theme: 'semanticUI',
    className: 'yellow',
    position: 'top center'
  });

  Highcharts.setOptions({
    colors: ["#2980b9", "#d35400", "#2ecc71", "#f1c40f", "#2c3e50", "#7f8c8d"],
    credits: {
      enabled: false
    },
    chart: {
      type: 'area',
      animation: false,
      style: {
        fontFamily: 'Lato, sans-serif'
      }
    },
    title: {
      text: null,
    },
    tooltip: {
      shared: true,
      crosshairs: true,
    },
    plotOptions: {
      series: {
        title: null,
        animation: false,
        fillOpacity: 0.1,
      },
    },
    yAxis: {
      allowDecimals: false,
      title: null
    },
  });

  Highcharts.chart('users-chart', {
    title: {
      text: null
    },

    subtitle: {
      text: null
    },

    yAxis: {
      title: {
        text: null
      }
    },

    plotOptions: {
      series: {
        pointStart: 2010
      }
    },

    series: [{
      name: 'A Faturar',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: 'Faturados',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Cancelados',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
      name: 'Aguardando Registro',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }]
  });

  Highcharts.chart('pie-chart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: null
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Microsoft Internet Explorer',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03,
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }, {
            name: 'Proprietary or Undetectable',
            y: 0.2
        }],
    }]
  });

})