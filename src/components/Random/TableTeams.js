import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  CardImg
} from "reactstrap";

const width = { width: "33%" };

const TableTeams = ({ teams }) => {
  
  let blueTeam, redTeam;
  teams[0].map(i => {
    const t = i.split(" - ");
    blueTeam = { ...blueTeam, [t[1]]: `${t[0]} - ${t[2]} - ${t[3]} - ${t[4]}` };
    return i;
  });
  teams[1].map(i => {
    const t = i.split(" - ");
    redTeam = { ...redTeam, [t[1]]: `${t[0]} - ${t[2]} - ${t[3]} - ${t[4]}` };
    return i;
  });

  const handlePos = i => {
    switch (i) {
      case 0:
        return "top";
      case 1:
        return "jungle";
      case 2:
        return "mid";
      case 3:
        return "ad";
      case 4:
        return "support";
      default:
        return;
    }
  };

  const renderPlayer = player => {
    const spl = player.split(" - ");

    return (
      <>
        <span>
          <CardImg style={{ width: "20px", marginRight: 10 }} src={spl[3]} alt="" />
        </span>
        <span>{spl[0]}</span>
        <span style={{ marginLeft: 25 }}>
          <Badge color="success">{spl[1]}</Badge>
        </span>
        <span style={{ marginLeft: 10 }}>
          <Badge color="danger">{spl[2]}</Badge>
        </span>
        <span style={{ marginLeft: 10 }}>
          <Badge color="primary">
            {~~((parseInt(spl[1]) / (parseInt(spl[1]) + parseInt(spl[2]))) * 100) ||
              0}{" "}
            <small>%</small>
          </Badge>
        </span>
      </>
    );
  };

  return (
    <Row>
      <Col xs="12" style={{ marginTop: 35 }}>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Battle board
          </CardHeader>
          <CardBody>
            <Table responsive size="sm" style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th style={width}>Blue Team</th>
                  <th style={{ ...width, fontSize: 24 }}>👑</th>
                  <th style={width}>Read Team</th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3, 4].map(i => {
                  return (
                    <tr key={blueTeam[handlePos(i)] + redTeam[handlePos(i)]}>
                      <td style={width}>
                        {renderPlayer(blueTeam[handlePos(i)])}
                      </td>
                      <td style={width}>
                        {handlePos(i)
                          .charAt(0)
                          .toUpperCase() + handlePos(i).slice(1)}
                      </td>
                      <td style={width}>
                        {renderPlayer(redTeam[handlePos(i)])}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default TableTeams;
