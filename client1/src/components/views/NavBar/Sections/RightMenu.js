import React from "react";

import { Button, Menu } from "antd";

import axios from "axios";

import { USER_SERVER } from "../../../Config";

// import { withRouter } from "react-router-dom";

import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";

const items = [
  { label: <a href="/login">Signin</a>, key: "mail" },
  { label: <a href="/register">Signup</a>, key: "app" },
];

const logInItems = [
  // { label: <a href="/video/upload">upload</a>, key: "upload" },
  {
    label: <a href="/">logout</a>,

    key: "logout",
  },
];

function RightMenu(props) {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return <Menu mode="horizontal" items={items} />;
  } else {
    return (
      <>
        <Link to="/video/upload">
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size={20}
          >
            업로드
          </Button>
        </Link>

        <Menu mode="horizontal" items={logInItems} onClick={logoutHandler} />
      </>
    );
  }
}

export default RightMenu;

// export default withRouter(RightMenu);
