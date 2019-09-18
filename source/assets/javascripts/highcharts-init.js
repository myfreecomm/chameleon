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
