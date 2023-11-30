import ApexCharts from 'apexcharts';

const options = {
    chart: {
        type: "bar",
        stacked: true,
        // Move radius property outside plotOptions
        radius: true,
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'all', // 'all', 'last'
            horizontal: true,
        },
    },
    series: [
        {
            name: 'sales',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
        },
        {
            name: 'revenue',
            data: [40, 50, 55, 60, 59, 70, 20, 20, 5],
        },
    ],
    xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999] },
};

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();


