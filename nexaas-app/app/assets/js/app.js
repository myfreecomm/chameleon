$(document).ready(function() {

  $('.btn-show-menu').on('click', openMenu);

  $('.btn-close-menu').on('click', closeMenu);

  $('.dropdown-toggle, .dropdown-hover').on('click', showDropdown);

  $('.btn-search').on('click', showSearch);

  $('.ch-search-overlay, .btn-close-search').on('click', hideSearch);

  $('.btn-notifications').on('click', showNotifications);

  $('.ch-notifications-overlay, .btn-close-notifications').on('click', hideNotifications);

  $('.ch-search-content, .ch-notifications-content').on('click', function(e) { e.stopPropagation(); });

  $('.ch-search-form-input').on('input', toggleSearchResults);

  $('.btn-remove-context').on('click', removeSearchContext);

  $(document).on({
    mouseup: function(e) {
      hideDropdown(e);
    },
    keydown: function(e) {
      hideSearchOnEscape(e);
    }
  });

});

var openMenu = function(e) {
  e.preventDefault();
  $('.ch-nav, .ch-menu, .ch-menu--helpers').addClass('open');
  $('.ch-nav .ch-dropdown').addClass('collapse');
}

var closeMenu = function() {
  $('.ch-nav, .ch-menu, .ch-menu--helpers').removeClass('open');
  $('.ch-nav .ch-dropdown').removeClass('collapse visible');
}

var showSearch = function(e) {
  e.preventDefault();
  $('.ch-search').show();
  $('.ch-search-results').hide();
  $('.ch-search-form-input').val('').focus();
}

var hideSearch = function() {
  $('.ch-search').hide(300);
}

var showNotifications = function(e) {
  e.preventDefault();
  $('.ch-notifications').show(300);
  $('.ch-notifications-content, .btn-show-all').addClass('active');
}

var hideNotifications = function() {
  $('.ch-notifications-content, .btn-show-all').removeClass('active');
  $('.ch-notifications').hide(300);
}

var showDropdown = function(e) {
  e.preventDefault();
  if ( $(this).siblings().hasClass('visible') ) {
    $('.ch-dropdown').removeClass('visible');
  } else {
    $('.ch-dropdown').removeClass('visible');
    $(this).siblings().addClass('visible')
  }
}

var hideDropdown = function(e) {
  var container = "";

  if ( $(window).width() <= 768 ) {
    container = $('.ch-nav');

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      closeMenu();
      container.unbind('mouseup');
    }
  } else {
    container = $('.ch-dropdown');

    if (!container.is(e.target) &&
      container.has(e.target).length === 0 &&
      container.parent().has(e.target).length === 0)
    {
      container.removeClass('visible');
      container.unbind('mouseup');
    }
  }
}

var toggleSearchResults = function() {
  $(this).val() === '' ? $('.ch-search-results').slideUp(300) : $('.ch-search-results').slideDown(300);
}

var removeSearchContext = function() {
  $('.ch-search-context').fadeOut(300);
  $('.ch-search-form-input').focus();
}

var hideSearchOnEscape = function(e) {
  var code = e.keyCode || e.which;
  if ( code === 27 && $('.ch-search').is(':visible')) {
    hideSearch();
  }
}

$(window).resize(function() {
  if ( $(window).width() >= 768 ) {
    closeMenu();
  }
});

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
        text: 'Browser market shares January, 2015 to May, 2015'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
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
            sliced: true,
            selected: true
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
        }]
    }]
});
