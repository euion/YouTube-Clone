import React, { useState } from "react";
import {
  FormGroup,
  InputGroup,
  FormControl,
  Col,
  Button,
  Form,
} from "react-bootstrap";

import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";

function RegisterPage2(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // submit 을 누른다고 refrash되는 것을 방지

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다,");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };
    console.log(body);

    dispatch(registerUser(body)).then((response) => {
      console.log(response);
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <Form horizontal onSubmit={onSubmitHandler}>
          <Form.Group controlId="formHorizontalEmail">
            <Col sm={20}>Email</Col>
            <Col sm={20}>
              <FormControl
                type="email"
                value={Email}
                onChange={onEmailHandler}
                placeholder="Email"
              />
            </Col>
          </Form.Group>
          <Form.Group controlId="formHorizontalPassword">
            <Col sm={20}>Password</Col>
            <Col sm={20}>
              <FormControl
                type="password"
                value={Password}
                onChange={onPasswordHandler}
                placeholder="Password"
              />
            </Col>
          </Form.Group>
          <Form.Group controlId="formHorizontalPassword">
            <Col sm={20}>Password Confirm</Col>
            <Col sm={20}>
              <FormControl
                type="password"
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
                placeholder="Password confirm"
              />
            </Col>
          </Form.Group>{" "}
          <Form.Group>
            <br></br>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Name
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={Name}
                onChange={onNameHandler}
              />
            </InputGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
export default RegisterPage2;
