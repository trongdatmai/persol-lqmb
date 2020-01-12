import React from "react";
import { Bar, Doughnut, Line, Pie, Polar, Radar } from "react-chartjs-2";
import { Card, CardBody, CardColumns, CardHeader } from "reactstrap";

const Charts = ({ match }) => {
  const radar = {
    labels: [
        "Percent Difference",
      "Kill",
      "Time Play",
    ],
    datasets: [
      {
        label: "Blue team",
        backgroundColor: "rgba(30, 144, 255, .2)",
        borderColor: "rgba(30, 144, 255, 1)",
        pointBackgroundColor: "rgba(30, 144, 255, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(30, 144, 255, 1)",
        data: [match.blueKill / match.red * 10, match.blueKill, match.timeToPlay]
      },
      {
        label: "Red team",
        backgroundColor: "rgba(255, 48, 48,0.2)",
        borderColor: "rgba(255, 48, 48,1)",
        pointBackgroundColor: "rgba(255, 48, 48,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 48, 48,1)",
        data: [match.redKill / match.blueKill * 10, match.redKill, match.timeToPlay]
      }
    ]
  };
  return (
    <div className="chart-wrapper">
      <Radar data={radar} />
    </div>
  );
};

export default Charts;
