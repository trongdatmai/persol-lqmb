import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
  CardImg
} from "reactstrap";
import firebase from "./../../config";

const base64Matcher = new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$");

const Profile = ({ changeStatusProgress, changeState }) => {
  const ref = firebase.database();
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account") || "{}")
  );
  const [keyAccount, setKeyAccount] = useState("");
  const [isSave, setSave] = useState(false);

  useEffect(() => {
    changeStatusProgress(true);
    ref
      .ref("users")
      .orderByChild("username")
      .equalTo(account.username)
      .on("value", snapshot => {
        if (snapshot.val() !== null) {
          const [acc] = Object.values(snapshot.val());
          setAccount(acc);
          setKeyAccount(Object.keys(snapshot.val()));
        }
        changeStatusProgress(false);
      });
  }, []);

  useEffect(() => {
    setSave(false);
  }, [account]);

  const updateProfile = async () => {
    changeStatusProgress(true);
    ref
      .ref()
      .child("/users/" + keyAccount)
      .update(account, () => {
        setSave(true);
        changeState(account);
        changeStatusProgress(false);
      });
  };

  return (
    <Row>
      <Col xs="12" sm="12">
        <Card>
          <CardHeader>
            <strong>Profile</strong>
            <small> Form</small>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Label htmlFor="company">Username</Label>
              <Input type="text" readOnly={true} value={account.username} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="Ingame">Ingame</Label>
              <Input
                type="text"
                id="Ingame"
                placeholder="PS.abcxyz"
                value={account.ingame}
                onChange={({ target: { value } }) =>
                  setAccount(prev => ({
                    ...prev,
                    ingame: value
                  }))
                }
              />
            </FormGroup>
            <FormGroup row>
              <Col md="12">
                <Label>Role</Label>
              </Col>
              <Col md="12">
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="Top"
                    checked={
                      account.role && account.role.some(i => i === "top")
                    }
                    onChange={({ target: { checked } }) =>
                      setAccount(prev =>
                        checked
                          ? account.role && account.role.length
                            ? ({ ...prev, role: [...account.role, "top"] })
                            : ({ ...prev, role: ["top"] })
                          : ({
                              ...prev,
                              role: [...account.role].filter(i => i !== "top")
                            })
                      )
                    }
                  />
                  <Label check className="form-check-label" htmlFor="Top">
                    Top
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="Jungle"
                    checked={
                      account.role && account.role.some(i => i === "jungle")
                    }
                    onChange={({ target: { checked } }) =>
                    setAccount(prev =>
                        checked
                          ? account.role && account.role.length
                            ? ({ ...prev, role: [...account.role, "jungle"] })
                            : ({ ...prev, role: ["jungle"] })
                          : ({
                              ...prev,
                              role: [...account.role].filter(i => i !== "jungle")
                            })
                      )
                    }
                  />
                  <Label check className="form-check-label" htmlFor="Jungle">
                    Jungle
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="Mid"
                    checked={
                      account.role && account.role.some(i => i === "mid")
                    }
                    onChange={({ target: { checked } }) =>
                    setAccount(prev =>
                        checked
                          ? account.role && account.role.length
                            ? ({ ...prev, role: [...account.role, "mid"] })
                            : ({ ...prev, role: ["mid"] })
                          : ({
                              ...prev,
                              role: [...account.role].filter(i => i !== "mid")
                            })
                      )
                    }
                  />
                  <Label check className="form-check-label" htmlFor="Mid">
                    Mid
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="Ad"
                    checked={account.role && account.role.some(i => i === "ad")}
                    onChange={({ target: { checked } }) =>
                    setAccount(prev =>
                        checked
                          ? account.role && account.role.length
                            ? ({ ...prev, role: [...account.role, "ad"] })
                            : ({ ...prev, role: ["ad"] })
                          : ({
                              ...prev,
                              role: [...account.role].filter(i => i !== "ad")
                            })
                      )
                    }
                  />
                  <Label check className="form-check-label" htmlFor="Ad">
                    Ad
                  </Label>
                </FormGroup>
                <FormGroup check className="checkbox">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    id="Support"
                    checked={
                      account.role && account.role.some(i => i === "support")
                    }
                    onChange={({ target: { checked } }) =>
                        setAccount(prev =>
                            checked
                            ? account.role && account.role.length
                                ? ({ ...prev, role: [...account.role, "support"] })
                                : ({ ...prev, role: ["support"] })
                            : ({
                                ...prev,
                                role: [...account.role].filter(i => i !== "support")
                                })
                        )
                    }
                  />
                  <Label check className="form-check-label" htmlFor="Support">
                    Support
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="12">
                <Label htmlFor="select">Rank</Label>
              </Col>
              <Col xs="12" md="12">
                <Input
                  type="select"
                  name="select"
                  id="select"
                  value={account.rank}
                  onChange={({ target: { value } }) =>
                    setAccount(prev => ({ ...prev, rank: value }))
                  }
                >
                  <option value="">Please select</option>
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Diamond">Diamond</option>
                  <option value="Veteran">Veteran</option>
                  <option value="Master">Master</option>
                  <option value="Challenger">Challenger</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="Avatar">Avatar </Label>
              <small>(Url)</small>
              <Input
                type="text"
                id="Avatar"
                placeholder="https://pornhub.com/avatar/MariaOzawa"
                value={account.avatar}
                onChange={({ target: { value } }) =>
                  setAccount(prev => ({
                    ...prev,
                    avatar: value
                  }))
                }
              />
              {account.avatar && (
                <>
                  <br />
                  <Label htmlFor="Avatar">Preview </Label>
                  <br />
                  <CardImg
                    src={account.avatar}
                    alt="avatar"
                    style={{
                      width: "200px",
                      border: "5px solid rgba(0,0,0, .4)"
                    }}
                  />
                </>
              )}
            </FormGroup>
            <Row>
              <Col col="6" sm="4" md="2" className="mb-3 mb-xl-0">
                <Button
                  block
                  color={isSave ? "success" : "primary"}
                  disabled={isSave}
                  onClick={updateProfile}
                >
                  {isSave ? "Success ✓" : "Save"}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
