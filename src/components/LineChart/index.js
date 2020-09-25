// import React, { Component } from "react";
// import { Line } from "react-chartjs-2";

// export default class LineChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: {
//         labels: this.props.labels,
//         datasets: this.props.datasets,
//       },
//     };
//   }

//   render() {
//     return (
//       <Line
//         redraw
//         data={this.state.data}
//         width={100}
//         height={50}
//         options={{ responsive: true, maintainAspectRatio: false }}
//         className="chart-data"
//       />
//     );
//   }
// }

// var myLineChart = new Chart(ctx, {
//   type: "line",
//   data: data,
//   options: options,
// });

import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";

const chartConfig = {
  type: "line",
  data: {
    labels: [
      "18/09/2020",
      "19/09/2020",
      "20/09/2020",
      "21/09/2020",
      "22/09/2020",
      "23/09/2020",
      "24/09/2020",
      "25/09/2020",
    ],
    datasets: [
      {
        label: "facebook",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(59, 89, 153, 0.4)",
        borderColor: "rgba(59, 89, 153, 1)",
      },
      {
        label: "twitter",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(0, 132, 255, 0.4)",
        borderColor: "rgba(0, 132, 255, 1)",
      },
      {
        label: "youtube",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(205, 32, 31, 0.4)",
        borderColor: "rgba(205, 32, 31, 1)",
      },
      {
        label: "instagram",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(228, 64, 95, 1)",
        borderColor: "rgba(228, 64, 95, 0.4)",
      },
      {
        label: "pantip",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(121, 118, 160, 0.4)",
        borderColor: "rgba(121, 118, 160, 1)",
      },
      {
        label: "sanook",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(207, 22, 1, 0.4)",
        borderColor: "rgba(207, 22, 1, 1)",
      },
      {
        label: "teenee",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(0, 120, 200, 0.4)",
        borderColor: "rgba(0, 120, 200, 1)",
      },
      {
        label: "dek_d",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(243, 122, 1, 0.4)",
        borderColor: "rgba(243, 122, 1, 1)",
      },
      {
        label: "dailynews",
        data: [0, 0, 0, 0, 0, 1, 1, 0],
        backgroundColor: "rgba(240, 2, 127, 0.4)",
        borderColor: "rgba(240, 2, 127, 1)",
      },
      {
        label: "thairath",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgb(1, 180, 0, 0.4)",
        borderColor: "rgb(1, 180, 0, 1)",
      },
      {
        label: "matichon",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(255, 131, 0, 0.4)",
        borderColor: "rgba(255, 131, 0, 1)",
      },
      {
        label: "mgronline",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(225, 220, 65, 0.4)",
        borderColor: "rgba(225, 220, 65, 1)",
      },
      {
        label: "khaosod",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(67, 177, 166, 0.4)",
        borderColor: "rgba(67, 177, 166, 1)",
      },
    ],
    // datasets: [
    //   {
    //     label: "facebook",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     backgroundColor: "rgba(59,89,153,0.2)",
    //     borderColor: "rgba(59,89,153,1)",
    //   },
    //   {
    //     label: "twitter",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     backgroundColor: "rgba(0,132,255,0.2)",
    //     borderColor: "rgba(0,132,255,1)",
    //   },
    //   {
    //     label: "youtube",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    //     backgroundColor: "rgba(205,32,31,0.2)",
    //     borderColor: "rgba(205,32,31,1)",
    //   },
    //   {
    //     label: "pantip",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 1, 2, 2],
    //     backgroundColor: "rgba(75,192,192,0.2)",
    //     borderColor: "rgba(75,192,192,1)",
    //   },
    //   {
    //     label: "sanook",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     backgroundColor: "rgba(75,192,192,0.2)",
    //     borderColor: "rgba(75,192,192,1)",
    //   },
    //   {
    //     label: "dailynews",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    //     backgroundColor: "rgba(228,64,95,0.2)",
    //     borderColor: "rgba(228,64,95,1)",
    //   },
    //   {
    //     label: "thairath",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    //     backgroundColor: "rgba(1, 180, 0,0.2)",
    //     borderColor: "rgba(1, 180, 0,1)",
    //   },
    //   {
    //     label: "matichon",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0],
    //     backgroundColor: "rgba(75,192,192,0.2)",
    //     borderColor: "rgba(75,192,192,1)",
    //   },
    //   {
    //     label: "mgronline",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 2, 0, 1, 0],
    //     backgroundColor: "rgba(75,192,192,0.2)",
    //     borderColor: "rgba(75,192,192,1)",
    //   },
    //   {
    //     label: "khaosod",
    //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     backgroundColor: "rgba(75,192,192,0.2)",
    //     borderColor: "rgba(75,192,192,1)",
    //   },
    // ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    // legend: {
    //   display: false,
    //   position: "top",
    // },
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //         callback: function (value, index, values) {
    //           if (parseInt(value) >= 1000) {
    //             return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //           } else {
    //             return "$" + value;
    //           }
    //         },
    //       },
    //     },
    //   ],
    // },
  },
};
// const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// let color = {
//   facebook: "rgba(59, 89, 153, 1)",
//   twitter: "rgba(0, 132, 255, 1)",
//   youtube: "rgba(205, 32, 31, 1)",
//   instagram: "rgba(228, 64, 95, 1)",
//   pantip: "rgba(121, 118, 160, 1)",
//   sanook: "rgba(207, 22, 1, 1)",
//   teenee: "rgba(0, 120, 200, 1)",
//   dekd: "rgba(243, 122, 1, 1)",
//   dailynews: "rgba(240, 2, 127, 1)",
//   thairath: "rgb(1, 180, 0, 1)",
//   matichon: "rgba(255, 131, 0, 1)",
//   mgronline: "rgba(204, 0, 0, 1)",
//   khaosod: "rgba(185, 6, 13, 1)",
// };
// const chartConfig = {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: { responsive: true, maintainAspectRatio: false },
// };

const LineChart = ({ labels, datasets, redraw }) => {
  console.log(`LineChart -> datasets`, datasets);
  console.log(`LineChart -> labels`, labels);
  console.log(`LineChart -> redraw`, redraw);

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const updateDataset = (newData, newData2) => {
    console.log(`updateDataset -> newData`, newData);
    console.log("ff : ", chartInstance);

    for (let index = 0; index < newData.length; index++) {
      const element = newData[index];
      console.log(`updateDataset -> element`, element);
      chartInstance.data.datasets[index].data = element.data;
      // chartInstance.data.datasets = [];
      // chartInstance.data.datasets = [...chartInstance.data.datasets, element];
    }

    chartInstance.data.labels = newData2;

    chartInstance.update();
  };
  // const onButtonClick = () => {
  //   const data = [randomInt(), randomInt(), randomInt(), randomInt(), randomInt(), randomInt()];
  //   updateDataset(0, data);
  // };

  // const updateDataset = (newData, newData2) => {
  //   chartInstance.data.datasets = newData;
  //   chartInstance.data.labels = newData2;
  //   chartInstance.update();
  // };
  const onButtonClick = () => {
    updateDataset(datasets, labels);
  };

  if (redraw !== null) {
    onButtonClick();
  }

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div className="chart-data">
      {/* <button onClick={onButtonClick}>Randomize!</button> */}
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChart;
