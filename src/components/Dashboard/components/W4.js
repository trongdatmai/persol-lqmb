import React, { useState, useEffect } from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Col,
    Progress,
    Row,
    FormGroup,
    Label,
    Input,
    CardHeader
} from 'reactstrap';
import { Line } from 'react-chartjs-2';


export default ({ account, historyMatchs }) => {
    
    const [name, setName] = useState('');
    const chooseAccount = account.find(e => e.ingame === name)
    useEffect(() => {
        let myAccount = JSON.parse(localStorage.getItem('account') || '{}');
        myAccount = account.find(e => e.username === myAccount.username)|| { ingame: ''}
        setName(myAccount.ingame)
      }, [])
    const matchsForName = [...historyMatchs].filter(i => i.blueTeam.some(e => { return e.search(name) !== -1 }) || i.redTeam.some(e => { return e.search(name) !== -1 }))
    const checkBlueTeamWinGame = (win, team) => team.some(e => { return e.search(name) !== -1 }) && win === 'blueTeam'
    const checkRedTeamWinGame = (win, team) => team.some(e => { return e.search(name) !== -1 }) && win === 'redTeam'
    const statisticForGame = [...matchsForName].reduce((acc, cur) => {
        acc = !!acc[cur.dateMatch] ?
            {
                ...acc, [cur.dateMatch]:
                    checkBlueTeamWinGame(cur.win, cur.blueTeam) || checkRedTeamWinGame(cur.win, cur.redTeam)
                        ? { ...acc[cur.dateMatch], win: acc[cur.dateMatch].win + 1 }
                        : { ...acc[cur.dateMatch], lose: acc[cur.dateMatch].lose + 1 }
            }
            : {
                ...acc, [cur.dateMatch]:
                    checkBlueTeamWinGame(cur.win, cur.blueTeam) || checkRedTeamWinGame(cur.win, cur.redTeam)
                        ? { lose: 0, win: 1 }
                        : { win: 0, lose: 1 }
            }
        let tmp = acc.winSequenceTmp
        if(checkBlueTeamWinGame(cur.win, cur.blueTeam) || checkRedTeamWinGame(cur.win, cur.redTeam)) {
            tmp += 1
        } else {
            tmp = 0
        }
        acc = tmp > acc.winSequence ? {...acc, winSequence: tmp, winSequenceTmp: tmp} : {...acc, winSequenceTmp: tmp}
        return acc
    }, {winSequence: 0, winSequenceTmp: 0})


    const data = {
        labels: [...Object.keys(statisticForGame)].filter(i => i !== 'winSequence' && i !== 'winSequenceTmp'),
        datasets: [
            {
                label: 'Win match',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#4dbd74 ',
                borderColor: '#4dbd74 ',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#4dbd74 ',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#4dbd74 ',
                pointHoverBorderColor: '#4dbd74 ',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: Object.values(statisticForGame).filter(i => typeof(i) !== 'number').map(i => i.win)
            },
            {
                label: 'Losing match',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#FF3030',
                borderColor: '#FF3030',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#FF3030',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#FF3030',
                pointHoverBorderColor: '#FF3030',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: Object.values(statisticForGame).filter(i => typeof(i) !== 'number').map(i => i.lose)
            }
        ]
    };

    return <Row>
        <Col>
            <Card>
            <CardHeader>
                <i className="fa fa-align-justify"></i> Statistic Chart
            </CardHeader>
                <CardBody>
                    <Row style={{ marginBottom: 20 }}>
                        <Col sm="5">
                            <CardTitle className="mb-0">Match history chart</CardTitle>
                            <div className="small text-muted">Persol Gaming 2020</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <FormGroup row>
                                <Col xs="12" md="12">
                                    <Label htmlFor="select">choose the player</Label>
                                </Col>
                                <Col xs="12" md="4">
                                    <Input type="select" value={name} name="select" id="select" onChange={e => setName(e.target.value)}>
                                        {
                                            !!account.length && account.map(acc => {
                                                return <option value={acc.ingame} key={acc.ingame}>{acc.ingame}</option>
                                            })
                                        }
                                    </Input>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="chart-wrapper" >
                        <Line data={data} />
                    </div>
                </CardBody>
                <CardFooter>
                    {!!chooseAccount && !!name && <Row className="text-center">
                        <Col sm={12} md className="mb-sm-2 mb-0">
                            <div className="text-muted">Win match</div>
                            <strong>{chooseAccount.win} <small>({~~(chooseAccount.win / (chooseAccount.win + chooseAccount.lose) * 100)}%)</small></strong>
                            <Progress className="progress-xs mt-2" color="success" value={~~(chooseAccount.win / (chooseAccount.win + chooseAccount.lose) * 100)} />
                        </Col>
                        <Col sm={12} md className="mb-sm-2 mb-0">
                            <div className="text-muted">Losing match</div>
                            <strong>{chooseAccount.lose} <small>({~~(chooseAccount.lose / (chooseAccount.win + chooseAccount.lose) * 100) + 1}%)</small></strong>
                            <Progress className="progress-xs mt-2" color="danger" value={~~(chooseAccount.lose / (chooseAccount.win + chooseAccount.lose) * 100) + 1} />
                        </Col>
                        <Col sm={12} md className="mb-sm-2 mb-0">
                            <div className="text-muted">Total matchs:</div>
                            <strong>{chooseAccount.lose + chooseAccount.win}</strong>
                            <Progress className="progress-xs mt-2" color="info" value={chooseAccount.lose + chooseAccount.win} />
                        </Col>
                        <Col sm={12} md className="mb-sm-2 mb-0">
                            <div className="text-muted">Total matchs(%): </div>
                            <strong>{~~((parseInt(chooseAccount.lose) + parseInt(chooseAccount.win)) / parseInt(historyMatchs.length) * 100)}%</strong>
                            <Progress className="progress-xs mt-2" color="primary" value={~~((parseInt(chooseAccount.lose) + parseInt(chooseAccount.win)) / parseInt(historyMatchs.length) * 100)} />
                        </Col>
                        <Col sm={12} md className="mb-sm-2 mb-0">
                            <div className="text-muted">Longest winning streak</div>
                            <strong>{statisticForGame.winSequence}</strong>
                            <Progress className="progress-xs mt-2" color="warning" value="100" />
                        </Col>
                    </Row>}
                </CardFooter>
            </Card>
        </Col>
    </Row>
}