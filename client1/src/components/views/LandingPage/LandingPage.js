import React, { useEffect, useState } from "react";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Row, Typography, Col, Avatar } from "antd";
import Auth from "../../../hoc/auth";
import moment from "moment";

const { Meta } = Card;

function LandingPage() {
  const [Videos, setVideos] = useState([]);

  // const promise = getPromise();
  // function getPromise() {
  //   return fetch("/api/video/getVideos", { method: "GET" })
  //     .then((res) => res.json())
  //     .then((funcData) => {
  //       console.log("이거다", funcData.videos);
  //       setVideos(funcData.videos);
  //     })
  //     .catch((err) => console.log(err));
  // }
  // const getData = () => {
  //   promise.then((appData) => {
  //     console.log(appData);
  //   });
  // };
  // Promise.allSettled(
  //   fetch("/api/video/getVideos", { method: "GET" }).then((result) => {
  //     if (result.status === "fulfilled") console.log(result);
  //   })
  // );
  useEffect(() => {
    // getData();
    fetch("/api/video/getVideos", { method: "GET" })
      .then((res) => res.json())
      .then((funcData) => {
        console.log("이거다", funcData.videos);
        setVideos(funcData.videos);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderCards =
    Videos &&
    Videos.map((video, index) => {
      var minutes = Math.floor(video.duration / 60);
      var seconds = Math.floor(video.duration - minutes * 60);

      return (
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: "relative" }}>
            <a href={`/video/${video._id}`}>
              <img
                style={{ width: "100%" }}
                alt="thumbnail"
                src={`http://localhost:5000/${video.thumbnail}`}
              />
              <div
                className=" duration"
                style={{
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  margin: "4px",
                  color: "#fff",
                  backgroundColor: "rgba(17, 17, 17, 0.8)",
                  opacity: 0.8,
                  padding: "2px 4px",
                  borderRadius: "2px",
                  letterSpacing: "0.5px",
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "12px",
                }}
              >
                <span>
                  {minutes} : {seconds}
                </span>
              </div>
            </a>
          </div>
          <br />
          <Meta
            // avatar={<Avatar src={video.writer.image} />}
            title={video.title}
          />
          {/* <span>{video.writer.name} </span> */}
          <span style={{ marginLeft: "3rem" }}> {video.views}</span>
          <span> {moment(video.createdAt).format("MMM Do YY")} </span> <br />
          <span> {video.description} </span>
        </Col>
      );
    });
  return (
    <>
      <div style={{ width: "85%", margin: "3rem auto" }}>
        <h3 level={2}> Recommended </h3>
        <hr />

        <Row gutter={16}>{renderCards}</Row>
      </div>
    </>
  );
}

export default Auth(LandingPage, null);
