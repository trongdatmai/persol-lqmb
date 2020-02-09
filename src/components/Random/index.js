import React, { useState, useEffect, useRef } from "react";
import firebase from "./../../config";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  CardImg,
  Badge,
  Button
} from "reactstrap";
import { AppSwitch } from "@coreui/react";
import ChartTeams from "./ChartTeams";
import TableTeams from "./TableTeams";
import OldMatch from "./OldMatch";
import moment from "moment";

const scrollToRef = ref =>
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

const Random = ({ changeStatusProgress }) => {
  const myRef = useRef(null);
  const ref = firebase.database();
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState({});
  const [oldMatch, setOldMatch] = useState({});
  const [randomPlayerNotInclude, setRandomPlayerNotInclude] = useState([]);
  const [lastRandomNotPlay, setLastRandomNotPlay] = useState([]);

  const handleRandomPlayer = () => {    
    setUsers(prev => prev.map(i => ({ ...i, checked: false })));
    let arrayUsers = [...lastRandomNotPlay.map(i => i.ingame)];
    let tempUsers = [...users].filter(i => !arrayUsers.includes(i.ingame));
    let length = arrayUsers.length;
    for (let i = 0; i < 10 - length; i++) {
      let index = ~~(Math.random() * tempUsers.length);
      arrayUsers = [...arrayUsers, tempUsers[index] && tempUsers[index].ingame];
      tempUsers.splice(index, 1);
    }

    setUsers(prev =>
      prev.map(i =>
        arrayUsers.includes(i.ingame) ? { ...i, checked: true } : i
      )
    );
    setTeams({});
    setRandomPlayerNotInclude(tempUsers);
  };

  useEffect(() => {
    changeStatusProgress(true);
    ref
      .ref("users")
      .orderByValue()
      .on("value", snap => {
        changeStatusProgress(false);
        setUsers(
          Object.values(snap.val()).map(user => ({ ...user, checked: false }))
        );
      });

    ref
      .ref("historyRandom")
      .orderByValue()
      .limitToLast(1)
      .on("value", snap => {
        changeStatusProgress(false);
        if (snap.val() !== null && !Object.values(snap.val())[0].complete) {
          setOldMatch(Object.values(snap.val())[0]);
        }
      });

    ref
      .ref("historyRandomNotPlay")
      .orderByValue()
      .limitToLast(1)
      .on("value", snap => {
        if (snap.val()) {
          setLastRandomNotPlay(Object.values(snap.val())[0]);
        }
      });
  }, []);

  const statisticPlayer = player => users.find(user => user.ingame === player);

  useEffect(() => {
    scrollToRef(myRef);
  }, [teams]);

  const lastInfoTeam = () => {
    const t1 =
      teams[0] &&
      teams[0].map(i => {
        const player = i.split(" - ")[0];
        const addStatistic =
          i +
          " - " +
          statisticPlayer(player).win +
          " - " +
          statisticPlayer(player).lose +
          " - " +
          statisticPlayer(player).avatar;
        return addStatistic;
      });
    const t2 =
      teams[1] &&
      teams[1].map(i => {
        const player = i.split(" - ")[0];
        const addStatistic =
          i +
          " - " +
          statisticPlayer(player).win +
          " - " +
          statisticPlayer(player).lose +
          " -  " +
          statisticPlayer(player).avatar;
        return addStatistic;
      });
    return { [0]: t1, [1]: t2 };
  };

  const handleSplitTeam = () => {
    let teams = users.filter(i => i.checked);
    let tmpTeams = [];
    for(let i = 0; i<10; i++) {
      const randomFollowLength = ~~(Math.random() * teams.length);
      tmpTeams = [...tmpTeams, teams[randomFollowLength]];
      teams.splice(randomFollowLength, 1);
    }
    teams = tmpTeams;
    const names = teams.map(i => i.ingame);
    const details = teams.reduce(
      (acc, cur) => ({ ...acc, [cur.ingame]: cur.role }),
      {}
    );

    const random = () => ~~(Math.random() * 5);

    const isFull = team => team.length === 5;

    const renderLane = (player, team) => {
      try {
        const rLane = details[player][random()];
        if (!rLane || team.some(i => i.includes(rLane))) {
          return renderLane(player, team);
        }
        return `${player} - ${rLane}`;
      } catch (err) {
        return handleSplitTeam();
      }
    };

    const splitTeam = names.reduce(
      (acc, cur) => {
        if (isFull(acc[0]) || isFull(acc[1])) {
          isFull(acc[0])
            ? acc[1].push(renderLane(cur, acc[1]))
            : acc[0].push(renderLane(cur, acc[1]));
        } else {
          const r = random() % 2;
          acc[r].push(renderLane(cur, acc[r]));
        }
        return acc;
      },
      { "0": [], "1": [] }
    );

    if (
      splitTeam[0].filter(Boolean).length === 5 &&
      splitTeam[1].filter(Boolean).length === 5
    ) {
      const point1 = splitTeam[0].reduce((acc, cur) => {
        const name = cur.split(' - ')[0];
        const u = users.find(u => u.ingame === name);
        acc += u.coefficient
        return acc
      }, 0)
      const point2 = splitTeam[1].reduce((acc, cur) => {
        const name = cur.split(' - ')[0];
        const u = users.find(u => u.ingame === name);
        acc += u.coefficient
        return acc
      }, 0)
      if(Math.abs(point1 - point2) < 0.2) {
        setTeams(splitTeam);
      } else {
        return handleSplitTeam();
      }
    }
  };

  const renderRole = r => {
    switch (r) {
      case "top":
        return (
          <Badge
            style={{ background: "#0099FF", marginRight: 10, color: "white" }}
          >
            {r}
          </Badge>
        );
      case "jungle":
        return (
          <Badge
            style={{ background: "#3366CC", marginRight: 10, color: "white" }}
          >
            {r}
          </Badge>
        );
      case "mid":
        return (
          <Badge
            style={{ background: "#FF9900", marginRight: 10, color: "white" }}
          >
            {r}
          </Badge>
        );
      case "ad":
        return (
          <Badge
            style={{ background: "#f25e5e", marginRight: 10, color: "white" }}
          >
            {r}
          </Badge>
        );
      case "support":
        return (
          <Badge
            style={{ background: "#f2a766", marginRight: 10, color: "white" }}
          >
            {r}
          </Badge>
        );
      default:
        return r;
    }
  };
  const renderWinRate = r => {
    if (r <= 25) {
      return (
        <Badge
          style={{ background: "#f25e5e", marginRight: 10, color: "white" }}
        >
          {r}
          <small>%</small>
        </Badge>
      );
    } else if (r <= 50) {
      return (
        <Badge color="warning">
          {r}
          <small>%</small>
        </Badge>
      );
    } else if (r <= 75) {
      return (
        <Badge color="primary">
          {r}
          <small>%</small>
        </Badge>
      );
    } else if (r <= 100) {
      return (
        <Badge color="success">
          {r}
          <small>%</small>
        </Badge>
      );
    }
  };

  const renderUser = () => {
    return users.map((user, index) => {
      return (
        <tr key={user.username}>
          <td>
            <Badge style={{ background: "#660099", color: "white" }}>
              {index + 1}
            </Badge>
          </td>
          <td>
            {user.avatar && (
              <CardImg
                style={{ width: "30px" }}
                src={user.avatar}
                alt="avatar"
              />
            )}
          </td>
          <td>
            <Badge style={{ background: "#660099", color: "white" }}>
              {user.ingame}
            </Badge>
          </td>
          <td>
            {user.role &&
              user.role.map(r => (
                <span key={user.username + r}>{renderRole(r)}</span>
              ))}
          </td>
          <td>
            <Badge color="success">{user.win}</Badge>
          </td>
          <td>
            <Badge color="danger">{user.lose}</Badge>
          </td>
          <td>
            {renderWinRate(~~((user.win / (user.win + user.lose)) * 100 || 0))}
          </td>
          <td>
            <AppSwitch
              className={"mx-1"}
              color={"success"}
              checked={user.checked}
              disabled={
                (handleTotalSelected() === 10 && !user.checked) ||
                !user.role ||
                !user.role.length
              }
              onChange={({ target: { checked } }) => {
                setUsers(prev =>
                  prev.map(p => {
                    if (p.username === user.username) {
                      p.checked = checked;
                    }
                    return p;
                  })
                );
              }}
            />
          </td>
        </tr>
      );
    });
  };

  const handleTotalSelected = () => {
    return users.filter(i => i.checked).length;
  };

  const handleSaveTeamRandom = () => {
    changeStatusProgress(true);
    const statistic = {
      blueTeam: teams[0],
      redTeam: teams[1],
      dateMatch: moment(new Date()).format("YYYY-MM-DD"),
      complete: false,
      authorCreate: JSON.parse(localStorage.getItem("account")).username,
      authorUpdate: ""
    };

    ref.ref("historyRandom").push(statistic, snap => {
      changeStatusProgress(false);
    });
    ref.ref("historyRandomNotPlay").push(randomPlayerNotInclude);
    setOldMatch(statistic);
  };

  if (oldMatch.complete === false)
    return (
      <OldMatch
        oldMatch={oldMatch}
        changeStatusProgress={changeStatusProgress}
      />
    );

  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Users table
          </CardHeader>
          <CardBody>
            <h4>
              Player selected{" "}
              <Badge
                color={handleTotalSelected() === 10 ? "success" : "secondary"}
              >
                {handleTotalSelected()}
              </Badge>
            </h4>
            {(handleTotalSelected() !== 10 && (
              <small>Choose 10 players from the board</small>
            )) || <small>Picked enough</small>}
            <Table hover bordered striped responsive size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Avatar</th>
                  <th>Player</th>
                  <th>Role</th>
                  <th>Win</th>
                  <th>Lost</th>
                  <th>
                    Win rate <small>(%)</small>
                  </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{renderUser()}</tbody>
            </Table>
            <Row>
              <Col col="6" sm="4" md="3" xl="2" className="mb-3 mb-xl-0">
                <Button
                  block
                  color="success"
                  onClick={handleRandomPlayer}
                  fullWidth
                >
                  Random players
                </Button>
              </Col>
              <Col col="6" sm="4" md="3" xl="2" className="mb-3 mb-xl-0">
                <Button
                  block
                  color="success"
                  disabled={handleTotalSelected() !== 10}
                  onClick={handleSplitTeam}
                  fullWidth
                >
                  Random team
                </Button>
              </Col>
            </Row>
            <div ref={myRef}>
              {teams && JSON.stringify(teams) !== "{}" && (
                <>
                  <TableTeams teams={lastInfoTeam()} />
                  <ChartTeams teams={lastInfoTeam()} />
                  <Row>
                    <Col col="6" sm="4" md="3" xl="2" className="mb-3 mb-xl-0">
                      <Button
                        block
                        color="success"
                        onClick={handleSaveTeamRandom}
                      >
                        Save Team
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Random;
