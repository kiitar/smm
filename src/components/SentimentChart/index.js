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
        label: "Negative",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(205, 32, 31, 0.4)",
        borderColor: "rgba(205, 32, 31, 1)",
      },
      {
        label: "Neutral",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(0, 132, 255, 0.4)",
        borderColor: "rgba(0, 132, 255, 1)",
      },
      {
        label: "Positive",
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgb(1, 180, 0, 0.4)",
        borderColor: "rgb(1, 180, 0, 1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
};

const SentimentChart = ({ labels, datasets, redraw }) => {
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
    // <div className="chart-data">
    <canvas ref={chartContainer} />
    // </div>
  );
};

export default SentimentChart;
