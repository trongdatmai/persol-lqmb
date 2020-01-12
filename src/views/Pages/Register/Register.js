import React, { Component, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import firebase from "./../../../config";
import { useHistory } from "react-router-dom";

const styleErr = { border: "1px solid #FF3300" };
const styleExists = { color: '#FF3300', display: 'block' }
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
const Register = () => {
  let history = useHistory();

  const [account, setAccout] = useState({
    username: "",
    password: "",
    repPassword: "",
    win: 0,
    lose: 0
  });
  const [err, setErr] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleRegister = async () => {
    let e = false;
    if (account.repPassword !== account.password || !account.password) {
      setErr(prev => ({ ...prev, password: true }));
      e = true;
    }
    if (!account.username && !account.username.trim()) {
      setErr(prev => ({ ...prev, username: true }));
      e = true;
    }
    if (e) return;
    await setDisabled(true);

    const ref = firebase.database();

    ref
      .ref("users")
      .orderByChild("username")
      .equalTo(account.username)
      .on("value", async snapshot => {
        if (snapshot.val() === null) {
          account.avatar = 'https://image.flaticon.com/icons/svg/2439/2439789.svg';
          await setAccout(prev => { delete prev.repPassword; return prev });
          ref.ref("users").push(account);
          localStorage.setItem('account', JSON.stringify(account));
          history.push('/user/profile');
        } else {
          setErr(prev => ({ ...prev, exist: true }));
          setDisabled(false)
          var key = snapshot.key;
          var childData = snapshot.val();
        }
      });
    // firebase.database().ref('users').push(account);
  };
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <p style={err.exist ? styleExists : {display: 'none'} } >Account already exists</p>
                  <InputGroup
                    className="mb-3"
                    style={err.username ? styleErr : {}}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      value={account.username}
                      onChange={({ target: { value } }) => {
                        setErr(prev => ({ ...prev, exist: false }));
                        setAccout(prev => ({ ...prev, username: value }));
                        setErr(prev => ({ ...prev, username: false }));
                      }}
                    />
                  </InputGroup>
                  <InputGroup
                    className="mb-3"
                    style={err.password ? styleErr : {}}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={account.password}
                      onChange={({ target: { value } }) => {
                        setAccout(prev => ({ ...prev, password: value }));
                        setErr(prev => ({ ...prev, password: false }));
                      }}
                    />
                  </InputGroup>
                  <InputGroup
                    className="mb-4"
                    style={err.password ? styleErr : {}}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      value={account.repPassword}
                      onChange={({ target: { value } }) => {
                        setAccout(prev => ({ ...prev, repPassword: value }));
                        setErr(prev => ({ ...prev, password: false }));
                      }}
                    />
                  </InputGroup>
                  <Button
                    color="success"
                    block
                    onClick={handleRegister}
                    disabled={disabled}
                  >
                    Create Account
                  </Button>
                </Form>
              </CardBody>
              <CardFooter className="p-4">
                <Row>
                  <Col xs="12" sm="6">
                    <Button className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </Button>
                  </Col>
                  <Col xs="12" sm="6">
                    <Button className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
