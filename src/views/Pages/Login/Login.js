import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import firebase from './../../../config';
import { useHistory, Link } from 'react-router-dom';
const styleExists = { color: '#FF3300', display: 'block' }

const Login = () => {
  const history = useHistory();
  const [account, setAccount] = useState({});
  const [err, setErr] = useState(false);
  const handleLogin = () => {
    const ref = firebase.database();
    ref
      .ref("users")
      .orderByChild("username")
      .equalTo(account.username)
      .on("value", async snapshot => {
        if (snapshot.val() === null) {
          setErr(true)
        } else {
          const [acc] = Object.values(snapshot.val())
          if(acc.password === account.password) {
            setErr(false)
            localStorage.setItem('account', JSON.stringify(account));
            history.push('/match/history-matchs');
          } else {
            setErr(true)
          }
        }
      });
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <p style={err ? styleExists : {display: 'none'} } >Login fail!</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        value={setAccount.username}
                        onChange={({ target: {value}}) => setAccount(prev => ({...prev, username: value}))}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={setAccount.password}
                        onChange={({ target: {value}}) => setAccount(prev => ({...prev, password: value}))}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={handleLogin}>
                          Login
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                        <Link to="/register">
                        <Button color="link" className="px-0">
                          Register Now
                        </Button>
                    </Link>
                        
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Sign up for an account if you don't already have one</p>
                    <Link to="/register">
                      <Button
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
