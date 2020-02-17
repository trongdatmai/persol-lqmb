import React from 'react'
import Widget04 from './../../../views/Widgets/Widget04';
import { Col, Row } from 'reactstrap';
import moment from 'moment'

export default ({ account, historyMatchs, t1, t4 }) => {
    const calcAvgMatchOfWeek = () => {
        const weekNumber = moment(historyMatchs[0].dateMatch, "YYYY-MM-DD").week();
        const weekCurrent = moment(moment().format("YYYY-MM-DD"), "YYYY-MM-DD").week();
        const dateWork = (weekCurrent - weekNumber) * 5;
        return parseFloat(historyMatchs.length / dateWork).toFixed(2)
    }

    return <Row>
        <Col sm="12" md="4">
            <Widget04 icon="icon-people" color="info" header={account.length.toString()} value="100">Player</Widget04>
        </Col>
        <Col sm="12" md="4">
            <Widget04 icon="icon-game-controller" color="success" header={historyMatchs.length.toString()} value={historyMatchs.length.toString()}>Matchs</Widget04>
        </Col>
        <Col sm="12" md="4">
            <Widget04 icon="icon-hourglass" color="warning" header={calcAvgMatchOfWeek().toString()} value="25">Avg. Matchs of Week</Widget04>
        </Col>
        <Col sm="12" md="4">
            {!!t1().length && <Widget04 icon="icon-speedometer" color="primary" header={t1()[0].ingame.toString() + " (" + (~~((t1()[0].win + t1()[0].lose) / historyMatchs.length * 100)) + "%)"} value={((t1()[0].win + t1()[0].lose) / historyMatchs.length * 100).toString()}>Most played</Widget04>}
        </Col>
        <Col sm="12" md="4">
            {!!t4().length && <Widget04 icon="icon-like" color="success" header={t4()[0].ingame.toString() + " (" + (~~(t4()[0].win / (t4()[0].win + t4()[0].lose) * 100)).toString() + "%)"} value={(t4()[0].win / (t4()[0].win + t4()[0].lose) * 100).toString()}>Highest Win Rate</Widget04>}
        </Col>
        <Col sm="12" md="4">
            {!!t4().length && <Widget04 icon="icon-dislike" color="danger" header={t4()[t4().length - 1].ingame.toString() + " (" + (~~(t4()[t4().length - 1].win / (t4()[t4().length - 1].win + t4()[t4().length - 1].lose) * 100)).toString() + "%)"} value={(t4()[t4().length - 1].win / (t4()[t4().length - 1].win + t4()[t4().length - 1].lose) * 100).toString()}>Highest Loss Rate</Widget04>}
        </Col>
    </Row>
}