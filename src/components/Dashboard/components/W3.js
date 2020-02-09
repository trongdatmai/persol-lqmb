import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardHeader, Col, Row, FormGroup, Label, Input, Progress } from 'reactstrap';
import Widget01 from './../../../views/Widgets/Widget01';


export default ({ account, statisticWLPlayers }) => {
 
  const [name, setName] = useState('');
  const statisticChooseName = statisticWLPlayers[name]

  useEffect(() => {
    let myAccount = JSON.parse(localStorage.getItem('account') || '{}');
    myAccount = account.find(e => e.username === myAccount.username) || { ingame: ''}
    setName(myAccount.ingame)
  }, [])
  const totalMatchs = () => {
    if (!account.length || !name) return;
    const player = [...account].filter(e => e.ingame === name)[0]
    return player.win + player.lose
  }

  const chooseAccount = account.find(e => e.ingame === name)

  const renderStatistic = () => {
    if (!name) return {};
    let rs = {}
    const w = statisticChooseName.win
    const l = statisticChooseName.lose
    for (let i in w) {
      rs = { ...rs, [i]: { win: w[i], lose: 0 } }
    }
    for (let i in l) {
      rs = { ...rs, [i]: { win: 0, ...rs[i], lose: l[i] } }
    }
    return rs
  }
 const sortStatisticWin = !!renderStatistic && Object.values(renderStatistic()).reduce((acc, cur, index) => cur.win >= acc.w ? acc = { w: cur.win, i: index} : acc, { w: 0, i: 0})
 const sortStatisticLose = !!renderStatistic && Object.values(renderStatistic()).reduce((acc, cur, index) => cur.lose >= acc.l ? acc = { l: cur.lose, i: index} : acc, { l: 0, i: 0})

  return <div className="animated fadeIn">
    <Row>
      <Col xs="12" lg="12">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Statistic Players
          </CardHeader>
          <CardBody>
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
            <Row>
            <Col xs="12" md="4">
              {!!name && <Widget01 color="primary" value={(chooseAccount.win / (chooseAccount.win + chooseAccount.lose) * 100).toString()} variant="inverse" header={"Matchs: " + totalMatchs()} mainText={"Win: " + chooseAccount.win + "\n Lose: " + chooseAccount.lose} smallText=""/>}
            </Col>
            <Col xs="12" md="4">
              {!!name && <Widget01 color="success" variant="inverse" header={"Outstanding teammate: "} mainText={ Object.keys(renderStatistic())[sortStatisticWin.i] + " - Win: " + sortStatisticWin.w} smallText=""/>}
            </Col>
            <Col xs="12" md="4">
            {!!name && <Widget01 color="danger" variant="inverse" header={"Lousy teammate: "} mainText={Object.keys(renderStatistic())[sortStatisticLose.i] + " - Lose: " + sortStatisticLose.l} smallText=""/>}
            </Col>

            </Row>
            {
              name !== '' && Object.keys(renderStatistic()).map((s, index) => {
                return <Row key={s} style={{ marginBottom: 15 }} >
                  <Col xs="12" md="3">
                    {s}
                  </Col>
                  <Col xs="12" md="9">
                    <Progress animated color="success" value={(Object.values(renderStatistic())[index].win / totalMatchs()) * 100} style={{ height: 10, marginBottom: 7 }} >{Object.values(renderStatistic())[index].win}</Progress>
                    <Progress animated color="danger" value={(Object.values(renderStatistic())[index].lose / totalMatchs()) * 100} style={{ height: 10 }}>{Object.values(renderStatistic())[index].lose}</Progress>
                  </Col>
                </Row>
              })
            }
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
}