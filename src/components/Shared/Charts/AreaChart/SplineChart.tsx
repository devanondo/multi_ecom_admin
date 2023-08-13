import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { FC } from 'react';

interface ISplineChart {
    color?: string;
    data?: number[];
}

const SplineChart: FC<ISplineChart> = ({ data = [31, 40, 28, 51, 42, 109, 100] }) => {
    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'area',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z',
            ],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    };

    const series = [
        {
            name: 'series1',
            data: data,
        },
        {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ];

    return (
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <ReactApexChart options={options} series={series} type="area" height={400} />;
        </div>
    );
};

export default SplineChart;
