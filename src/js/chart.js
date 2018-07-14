Highcharts.chart('results_graph', {

    title: {
        text: ''
    },

    colors: ['#aaaaaa', '#a53c96', '#8bbc21', '#910000', '#1aadce',
    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],

    subtitle: {
        text: ''
    },

    chart: {
      height: '300',
      type: 'spline',

    },

    credits: {
      enabled:false
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
          formatter: function() {
             return this.value+"%";
          }
        },
        opposite:true
    },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2017
        }
    },

    series: [{
        name: 'Class Average',
        data: [43, 52, 57, 69, 95, 78, 77, 65]
    }, {
        name: 'Your Knowledge',
        data: [24, 24, 29, 32, 38, 43, 28, 37]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
