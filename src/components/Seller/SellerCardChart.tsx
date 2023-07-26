import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { FC } from 'react';

interface IChartCard {
    color?: string;
    data?: number[];
}

const SellerCardChart: FC<IChartCard> = ({
    color = '#04C518',
    data = [31, 140, 28, 251, 109, 100, 30, 251, 109, 100, 30],
}) => {
    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
            offsetX: 0,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },

        stroke: {
            show: true,
            curve: 'smooth',
            colors: [color],
            width: 3,
            dashArray: 0,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: true,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: [],
            },
        },
    };

    const series = [
        {
            name: '',
            data: data,
        },
    ];

    return (
        <div style={{ maxWidth: '100%' }}>
            <ReactApexChart options={options} series={series} type="line" height={100} />
        </div>
    );
};

export default SellerCardChart;
