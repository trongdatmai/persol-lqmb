import React, { useState } from 'react'
import classnames from 'classnames';
import { Card, CardBody, CardHeader, Col, Row, TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText } from 'reactstrap';
import T1 from './T1';
import T2 from './T2';
import T3 from './T3';
import T4 from './T4';

export default ({ t1, t2, t3, t4 }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return <div className="animated fadeIn">
    <Row>
      <Col xs="12" lg="12">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Statistic Matchs
          </CardHeader>
          <CardBody>
            <div>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                  >
                    Win rates
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                  >
                    Number of matches
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '3' })}
                    onClick={() => { toggle('3'); }}
                  >
                    Number of wins
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '4' })}
                    onClick={() => { toggle('4'); }}
                  >
                    Number of losing
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <T4 t4={t4()} />
                </TabPane>
                <TabPane tabId="2">
                  <T1 t1={t1()} />
                </TabPane>
                <TabPane tabId="3">
                  <T2 t2={t2()} />
                </TabPane>
                <TabPane tabId="4">
                  <T3 t3={t3()} />
                </TabPane>
              </TabContent>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
}