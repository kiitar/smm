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
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
};

const LineChart = ({ labels, datasets, redraw }) => {
  // console.log(`LineChart -> datasets`, datasets);
  // console.log(`LineChart -> labels`, labels);
  // console.log(`LineChart -> redraw`, redraw);

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const updateDataset = (newData, newData2) => {
    console.log(`updateDataset -> newData`, newData);
    console.log("ff : ", chartInstance);

    for (let index = 0; index < newData.length; index++) {
      const element = newData[index];
      console.log(`updateDataset -> element`, element);
      chartInstance.data.datasets[index].data = element.data;
    }

    chartInstance.data.labels = newData2;

    chartInstance.update();
  };

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
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChart;
