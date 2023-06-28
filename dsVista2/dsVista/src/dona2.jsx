import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

var yValues1 = [24, 76];
var barColors1 = [
    "#6699FF",
    "#AAAAAA"
];

var myData = {
    datasets: [{
        backgroundColor: barColors1,
        data: yValues1,
        borderColor: "rgba(0,0,0,0)"
    }]
}

export function dona2() {
    return (
        <Doughnut data={myData} />
    );
}

export default dona2;


