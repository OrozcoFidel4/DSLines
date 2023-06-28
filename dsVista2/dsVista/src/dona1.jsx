import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

var yValues1 = [55, 45];
var barColors1 = [
    "#FF0000",
    "#AAAAAA"
];

var myData = {
    datasets: [{
        backgroundColor: barColors1,
        data: yValues1,
        borderColor: "rgba(0,0,0,0)"
    }]
}

export function dona1() {
    return (
        <Doughnut data={myData} />
    );
}

export default dona1;


