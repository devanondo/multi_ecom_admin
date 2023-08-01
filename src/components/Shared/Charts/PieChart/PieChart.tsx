import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const PieChart: React.FC = () => {
    const options: ApexOptions = {
        chart: {
            type: 'donut',
        },
        legend: {
            position: 'bottom',
        },

        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    const series = [44, 55, 41, 17, 15];

    return <ReactApexChart options={options} series={series} type="donut" height={400} />;
};

export default PieChart;
