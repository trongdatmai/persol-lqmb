import React from 'react'
import { HorizontalBar } from 'react-chartjs-2';

export default () => {
    const options = {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }

    const dataHorBar = {
        labels: ['Top', 'Jungle', 'Mid', 'Ad', 'Support'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                minBarLength: 5,
                data: [5, 2, 2, 0, 3]
            },
            {
                label: 'My First dataset',
                backgroundColor: '#EC932F',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                minBarLength: 5,
                data: [1, 0, 0, 0, 5]
            }
        ]
    };
    return (
        <>
            <HorizontalBar data={dataHorBar} options={options} />
        </>
    )
}