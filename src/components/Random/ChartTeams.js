import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardBody, Row, Col, CardHeader } from "reactstrap";

const ChartTeams = ({ teams }) => {
    let blueTeam, redTeam;
    teams[0].map(i => {
      const t = i.split(" - ");
      blueTeam = { ...blueTeam, [t[1]]: {name: t[0], ratio: ~~(parseInt(t[2]) / (parseInt(t[2]) + parseInt(t[3])) * 100) || 1} };
      return i;
    });
    teams[1].map(i => {
      const t = i.split(" - ");
      redTeam = { ...redTeam, [t[1]]: {name: t[0], ratio: ~~(parseInt(t[2]) / (parseInt(t[2]) + parseInt(t[3])) * 100) || 1}  };
      return i;
    });

  const pie1 = {
    labels: [blueTeam.top.name, blueTeam.jungle.name, blueTeam.mid.name, blueTeam.ad.name, blueTeam.support.name],
    datasets: [
      {
        data: [blueTeam.top.ratio, blueTeam.jungle.ratio, blueTeam.mid.ratio, blueTeam.ad.ratio, blueTeam.support.ratio],
        backgroundColor: ["#4BD4F2", "#4BF2D4", "#F2E85E", "#F2A766", "#F25E5E"],
        hoverBackgroundColor: ["#4BD4F2", "#4BF2D4", "#F2E85E", "#F2A766", "#F25E5E"]
      }
    ]
  };

  const pie2 = {
    labels: [redTeam.top.name, redTeam.jungle.name, redTeam.mid.name, redTeam.ad.name, redTeam.support.name],
    datasets: [
      {
        data: [redTeam.top.ratio, redTeam.jungle.ratio, redTeam.mid.ratio, redTeam.ad.ratio, redTeam.support.ratio],
        backgroundColor: ["#4BD4F2", "#4BF2D4", "#F2E85E", "#F2A766", "#F25E5E"],
        hoverBackgroundColor: ["#4BD4F2", "#4BF2D4", "#F2E85E", "#F2A766", "#F25E5E"]
      }
    ]
  };

  return (
    <Row>
      <Col xs={12} sm={6} >
        <Card>
          <CardHeader>
            <b>Blue team</b>
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper">
              <Pie data={pie1} />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs={12} sm={6}>
        <Card>
          <CardHeader>
            <b>Red team</b>
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper">
              <Pie data={pie2} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ChartTeams;
