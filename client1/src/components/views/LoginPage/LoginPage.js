import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Col, FormControl, Button } from "react-bootstrap";

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault(); // submit을 누른다고 refrash되는 것을 방지

    console.log("Email", Email);
    console.log("password", Password);

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
      }}
    >
      <Form horizontal onSubmit={onsubmitHandler}>
        <Form.Group controlId="formHorizontalEmail">
          <Col sm={2}>Email</Col>
          <Col sm={10}>
            <FormControl
              type="email"
              value={Email}
              onChange={onEmailHandler}
              placeholder="Email"
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="formHorizontalPassword">
          <Col sm={2}>Password</Col>
          <Col sm={10}>
            <FormControl
              type="password"
              value={Password}
              onChange={onPasswordHandler}
              placeholder="Password"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <br></br>
        </Form.Group>
        <Form.Group>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
      {/* <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onsubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <br />

        <button>제출하기</button>
      </form> */}
    </div>
  );
}

export default LoginPage;
