import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import moment from "moment";
import firebase from "./../../config";
import { useHistory } from "react-router-dom";

const OldMatch = ({ oldMatch, changeStatusProgress, reset }) => {
  const [matchs, setMatchs] = useState([]);
  const [err, setErr] = useState(true);
  const ref = firebase.database();
  const history = useHistory();

  useEffect(() => {
    let tmp = false;
    for (let i = 0; i < matchs.length; i++) {
      for (let j in matchs[i]) {
        if (matchs[i][j] === "") {
          tmp = true;
          break;
        }
      }
      if (tmp) break;
    }
    !!matchs.length ? setErr(tmp) : setErr(true);
  }, [matchs]);

  const handleRenderMatch = ({ target: { value } }) => {
    let statisticMatch = [];
    for (let i = 0; i < value; i++) {
      statisticMatch = [
        ...statisticMatch,
        {
          mvpWin: "",
          mvpLose: "",
          blueKill: "",
          redKill: "",
          win: ""
        }
      ];
    }
    setMatchs(statisticMatch);
  };

  const renderTeamPlayer = nameTeam => {
    if (nameTeam === "blueTeam") {
      return { win: oldMatch.blueTeam, lose: oldMatch.redTeam };
    }
    if (nameTeam === "redTeam") {
      return { win: oldMatch.redTeam, lose: oldMatch.blueTeam };
    }
  };

  const handleTeamWinStatics = (value, match) => {
    setMatchs(prev => {
      let newMatch = prev;
      newMatch[match] = { ...newMatch[match], ...value };
      return JSON.parse(JSON.stringify(newMatch));
    });
  };
  const handleSaveHistory = async () => {
    await matchs.map(match => {
      ref.ref("historyMatch").push({
        ...match,
        blueTeam: oldMatch.blueTeam,
        redTeam: oldMatch.redTeam,
        dateMatch: oldMatch.dateMatch,
        authorCreate: JSON.parse(localStorage.getItem("account")).username,
        authorUpdate: ""
      });

      const teamWin = oldMatch[match.win].map(i => i.split(" - ")[0]);
      const teamLose = oldMatch[
        match.win === "blueTeam" ? "redTeam" : "blueTeam"
      ].map(i => i.split(" - ")[0]);
      ref.ref("users").once("value", snap => {
        if (snap.val() !== null) {
          const tmp = JSON.parse(JSON.stringify(snap.val()));
          Object.values(snap.val()).forEach((i, index) => {
            if (teamWin.includes(i.ingame.trim())) {
              i = { ...i, win: parseInt(i.win) + 1 };
            }
            if (teamLose.includes(i.ingame.trim())) {
              i = { ...i, lose: parseInt(i.lose) + 1 };
            }
            const key = Object.keys(snap.val())[index];
            tmp[key] = JSON.parse(JSON.stringify(i));
          });
          ref.ref("users").update(tmp, () => { console.log('update done')})
        }
      });
    });

    await ref
      .ref("historyRandom")
      .orderByValue()
      .limitToLast(1)
      .on("value", snap => {
        changeStatusProgress(false);
        if (snap.val() !== null) {
          ref
            .ref()
            .child("/historyRandom/" + Object.keys(snap.val())[0])
            .update({
              ...oldMatch,
              complete: true
            }, () => { console.log('update 2 done' )});
        }
      });
    setTimeout(window.location.reload(), 500);
  };

  return (
    <Row>
      <Col xs="12">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Random match results on{" "}
            {oldMatch.dateMatch}
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs={12} sm={6}>
                <Card>
                  <CardHeader>
                    <strong>Blue Team</strong>
                  </CardHeader>
                  <CardBody>
                    <ListGroup>
                      {oldMatch.blueTeam.map(i => {
                        return <ListGroupItem key={i}> {i} </ListGroupItem>;
                      })}
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} sm={6}>
                <Card>
                  <CardHeader>
                    <strong>Red Team</strong>
                  </CardHeader>
                  <CardBody>
                    <ListGroup>
                      {oldMatch.redTeam.map(i => {
                        return <ListGroupItem key={i}> {i} </ListGroupItem>;
                      })}
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12}>
                <FormGroup>
                  <Label htmlFor="NOM">Number of match:</Label>
                  <Input
                    type="text"
                    id="NOM"
                    placeholder="0"
                    onChange={handleRenderMatch}
                  />
                </FormGroup>
              </Col>
              <Col xs={12}>
                {!!matchs.length &&
                  matchs.map((m, index) => (
                    <Card>
                      <CardHeader>
                        <strong>Match {index + 1}:</strong>
                      </CardHeader>
                      <CardBody>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="select">Team win:</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="select"
                              name="select"
                              id="select"
                              onChange={({ target: { value } }) =>
                                handleTeamWinStatics({ win: value }, index)
                              }
                            >
                              <option value="">Please select</option>
                              <option value="blueTeam">Blue Team</option>
                              <option value="redTeam">Red Team</option>
                            </Input>
                          </Col>
                        </FormGroup>
                        {!!m.win && (
                          <>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="select">MVP team win:</Label>
                              </Col>
                              <Col xs="12" md="9">
                                <Input
                                  type="select"
                                  name="select"
                                  id="select"
                                  onChange={({ target: { value } }) =>
                                    handleTeamWinStatics(
                                      { mvpWin: value },
                                      index
                                    )
                                  }
                                >
                                  <option value="">Please select</option>
                                  {renderTeamPlayer(m.win).win.map(i => (
                                    <option value={i}>{i}</option>
                                  ))}
                                </Input>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="select">MVP team lose:</Label>
                              </Col>
                              <Col xs="12" md="9">
                                <Input
                                  type="select"
                                  name="select"
                                  id="select"
                                  onChange={({ target: { value } }) =>
                                    handleTeamWinStatics(
                                      { mvpLose: value },
                                      index
                                    )
                                  }
                                >
                                  <option value="">Please select</option>
                                  {renderTeamPlayer(m.win).lose.map(i => (
                                    <option value={i}>{i}</option>
                                  ))}
                                </Input>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="select">Blue team kill:</Label>
                              </Col>
                              <Col xs="12" md="9">
                                <Input
                                  type="text"
                                  name="select"
                                  id="select"
                                  placeholder="0"
                                  onChange={({ target: { value } }) =>
                                    handleTeamWinStatics(
                                      { blueKill: value },
                                      index
                                    )
                                  }
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="select">Red team kill:</Label>
                              </Col>
                              <Col xs="12" md="9">
                                <Input
                                  type="text"
                                  name="select"
                                  id="select"
                                  placeholder="0"
                                  onChange={({ target: { value } }) =>
                                    handleTeamWinStatics(
                                      { redKill: value },
                                      index
                                    )
                                  }
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Label htmlFor="select">Time to play (integer):</Label>
                              </Col>
                              <Col xs="12" md="9">
                                <Input
                                  type="text"
                                  name="select"
                                  id="select"
                                  placeholder="15"
                                  onChange={({ target: { value } }) =>
                                    handleTeamWinStatics(
                                      { timeToPlay: value },
                                      index
                                    )
                                  }
                                />
                              </Col>
                            </FormGroup>
                          </>
                        )}
                      </CardBody>
                    </Card>
                  ))}
              </Col>
            </Row>
            <Row>
              <Col col="6" sm="4" md="3" xl="2" className="mb-3 mb-xl-0">
                <Button
                  block
                  color="success"
                  onClick={handleSaveHistory}
                  disabled={err}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default OldMatch;
