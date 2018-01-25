Highcharts.setOptions({
  colors: ["#2980b9", "#d35400", "#2ecc71", "#f1c40f", "#2c3e50", "#7f8c8d"],
  credits: {
    enabled: false
  },
  chart: {
    type: 'line',
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
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Other',
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
