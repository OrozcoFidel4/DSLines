import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
Chart.register(ArcElement, Tooltip, Legend);

var xValues3 = ["7/Jun/2023", "8/Jun/2023", "9/Jun/2023", "10/Jun/2023", "11/Jun/2023", "12/Jun/2023", "13/Jun/2023"];

var myData = {
    labels: xValues3,
    datasets: [{
        label: 'Linea 1',
        data: [240, 401, 160, 160, 507, 655, 423],
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: "#FF0000",
        fill: true
        
    }, {
        label: 'Linea 2',
        data: [300, 650, 105, 350, 600, 477, 265],
        backgroundColor: 'rgba(102, 153, 255, 0.2)',
        borderColor: "#6699FF",
        fill: true
    }]
}

var myOptions = {
    scales: {
        y: {
            grid: {
                color: 'rgba(240, 248, 255, 0.5)'
            }
        },
        x: {
            grid: {
                color: 'rgba(0,0,0,0)'
            }
        }

    }

}

export function Grafica() {
    return (
        <Line data={myData} options={myOptions} />
    );
}

export default Grafica;