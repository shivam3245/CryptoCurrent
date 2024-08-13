import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";
import Skeleton from "./Skeleton";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const HistoryChart = () => {
    const { id } = useParams();
    const [days, setDays] = useState(7); // Default to 7 days
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=${days}`);

    if (!response) {
        return (
            <div className="wrapper-container mt-8">
                <Skeleton className="h-72 w-full mb-10" />
            </div>
        );
    }

    const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

    const options = {
        responsive: true,
    };

    const data = {
        labels: coinChartData.map(value => {
            // Use a more detailed format for the last 24 hours
            return days === 1 ? moment(value.x).format('HH:mm') : moment(value.x).format('MMM DD');
        }),
        datasets: [
            {
                fill: true,
                label: id,
                data: coinChartData.map(val => val.y),
                borderColor: 'rgb(53, 102, 100)',
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
            }
        ]
    };

    return (
        <div>
            {/* Buttons to switch between different time ranges */}
            <div className="flex justify-center mb-4    ">
                <button
                    className={`px-4 py-2 m-2 ${days === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDays(1)}
                >
                    24 Hours
                </button>
                <button
                    className={`px-4 py-2 m-2 ${days === 7 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDays(7)}
                >
                    7 Days
                </button>
                <button
                    className={`px-4 py-2 m-2 ${days === 30 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDays(30)}
                >
                    30 Days
                </button>
                <button
                    className={`px-4 py-2 m-2 ${days === 90 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDays(90)}
                >
                    90 Days
                </button>
            </div>

            <Line options={options} data={data} />
        </div>
    );
};

export default HistoryChart;
