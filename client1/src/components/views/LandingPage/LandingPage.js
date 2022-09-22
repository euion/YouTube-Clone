import React, { useEffect } from "react";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Row, Typography, Col } from "antd";
const { Title } = Typography;
const { Meta } = Card;

function LandingPage() {
  useEffect(() => {
    Axios.get("/api/video/getVideos").then((response) => {
      if (response.data.success) {
        console.log(response.data);
      } else {
        alert("비디오 가져오기를 실패했습니다.");
      }
    });
  }, []);

  return (
    <>
      {/* {renderCards} */}
      <div style={{ width: "85%", margin: "3rem auto" }}>
        <Title lever={2}>Recommended</Title>
        <hr />
        <Row gutter={[32, 16]}>
          {/* {renderCards} */}
          <Col lg={6} md={8} xs={24}>
            <div style={{ position: "relative" }}>
              <div className="duration"></div>
            </div>
            <br />
            <Meta description="" />
          </Col>
        </Row>
      </div>

      {/* <button onClick={onClickHandler}>로그아웃</button> */}
    </>
  );
}

export default LandingPage;
