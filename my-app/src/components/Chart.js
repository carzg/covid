import React from 'react';
import styles from './Chart.module.css'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';


ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

const options = {
responsive: true,
plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Global Summary'
        },
    },
};

const Chart = (props) => {

    const labels = props.date_array;

    const data = {
    labels,
    datasets: [
            {
                label: 'Confirmed_cases',
                data: props.confirmed_array,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Deaths',
                data: props.deaths_array,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return (
        <div className={styles.Chart}>
            <Line options={options} data={data} />
        </div>
    )
}

export default Chart;
 
