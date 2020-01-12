import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Row
} from "reactstrap";
import firebase from "./../../config";
import moment from "moment";
import Charts from "./Charts";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const styled = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  win: {
    color: "#ffc107"
  },
  lose: {
    color: "#f86c6b"
  }
};

const HistoryMatch = () => {
  const [matchs, setMatchs] = useState([]);
  const ref = firebase.database();
  useEffect(() => {
    ref.ref("historyMatch").once("value", snap => {
      if (snap.val() !== null) {
        setMatchs(Object.values(snap.val()).reverse());
      }
    });
  }, []);

  const renderPos = team => {
    let mapTeam = [];
    team.map(i => {
      const t = i.split(" - ");
      mapTeam = { ...mapTeam, [t[1]]: i };
    });
    return [
      mapTeam.top,
      mapTeam.jungle,
      mapTeam.mid,
      mapTeam.ad,
      mapTeam.support
    ];
  };
  const checkMVP = (mW, mL, name) => {
    if (mW === name) {
      return (
        <>
          {name} <Badge color="warning">MVP</Badge>
        </>
      );
    }
    if (mL === name) {
      return (
        <>
          {name} <Badge color="danger">MVP</Badge>
        </>
      );
    }
    return name;
  };
  const RenderMatchs = ({ match }) => {
    console.log(match);
    return (
      <Col xs="12">
        <Card>
          <CardHeader>
            <strong>
              Match on {days[moment(match.dateMatch).day()]} {match.dateMatch}
            </strong>
          </CardHeader>

          <CardBody>
            <Row>
              <Col xs={12} sm={3} align="center" style={styled.flexCenter}>
                {match.win === "blueTeam" ? (
                  <h2 style={styled.win} className="mb-1">
                    𝓦𝓘𝓝
                  </h2>
                ) : (
                  <h2 style={styled.lose} className="mb-1">
                    𝓛𝓞𝓢𝓔
                  </h2>
                )}
                <strong className="d-block mb-3">Blue team</strong>
                {renderPos(match.blueTeam).map((i, index) => (
                  <small className="d-block" key={i + index}>
                    {checkMVP(match.mvpWin, match.mvpLose, i)}
                  </small>
                ))}
              </Col>
              <Col xs={12} sm={6}>
                <div style={styled.flexCenter}>
                  <small className="d-block">
                    <Badge color="primary">{match.timeToPlay}'</Badge>
                    {"\u00A0\u00A0\u00A0"}Time to Play{"\u00A0\u00A0\u00A0"}
                    <Badge color="primary">{match.timeToPlay}'</Badge>
                  </small>
                  <small className="d-block">
                    <Badge color="warning">{match.blueKill}</Badge>
                    {"\u00A0\u00A0\u00A0\u00A0\u00A0"}Kill
                    {"\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    <Badge color="danger">{match.redKill}</Badge>
                  </small>
                </div>

                <Charts match={match} />
              </Col>
              <Col xs={12} sm={3} align="center" style={styled.flexCenter}>
                {match.win === "redTeam" ? (
                  <h2 style={styled.win} className="mb-1">
                    𝓦𝓘𝓝
                  </h2>
                ) : (
                  <h2 style={styled.lose} className="mb-1">
                    𝓛𝓞𝓢𝓔
                  </h2>
                )}
                <strong className="d-block mb-3">Red team</strong>
                {renderPos(match.redTeam).map((i, index) => (
                  <small className="d-block" key={i + index}>
                    {checkMVP(match.mvpWin, match.mvpLose, i)}
                  </small>
                ))}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  };

  return (
    <div className="animated fadeIn">
      <Row>
        {!!matchs.length &&
          matchs.map(match => {
            return <RenderMatchs match={match} />;
          })}
      </Row>
    </div>
  );
};

export default HistoryMatch;
