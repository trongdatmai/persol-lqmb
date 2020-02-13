import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardHeader, Col, Row, TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText } from 'reactstrap';
import Select from 'react-select';
import firebase from "./../../config";
import C1 from './components/C1';

export default ({ changeStatusProgress }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const ref = firebase.database();
    const [account, setAccount] = useState([])
    const [historyMatchs, setHistoryMatchs] = useState([])

    const options = account.map(i => ({ value: JSON.stringify(i), label: i.ingame }))

    const handleChange = selected => {
        setSelectedOption(selected);
    };

    console.log(selectedOption)
    const initFunc = async () => {
        const snapshotUsers = ref.ref("users").once("value")
        const snapshotMatchs = ref.ref("historyMatch").once("value")
        const [users, matchs] = await Promise.all([snapshotUsers, snapshotMatchs])
        setAccount(Object.values(users.val()));
        setHistoryMatchs(Object.values(matchs.val()));
        changeStatusProgress(false)
    }

    useEffect(() => {
        changeStatusProgress(true)
        initFunc();
    }, [])



    return <div className="animated fadeIn">
        <Row>
            <Col xs="12" lg="12">
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Compare Players
          </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs={12} style={{marginBottom: 30}}>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    options={options}
                                    isMulti
                                />
                            </Col>
                            <Col xs={12}>
                                <C1 />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
}