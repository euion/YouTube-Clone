import React, { useState } from "react";
import { Typography, Button, Form, message, Input } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";

const { Title } = Typography;
const { TextArea } = Input;

const PrivateOption = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];

const CategoryOption = [
  { value: 0, label: "Film & Animation" },
  { value: 1, label: "Autos & Vehicles" },
  { value: 2, label: "Music" },
  { value: 3, label: "Pets & Animals" },
  { value: 4, label: "Sports" },
];

function VideoUploadPage() {
  const [VideoTitle, setVideoTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Private, setPrivate] = useState(0);
  const [Category, setCategory] = useState("Film & Animation");

  const [FilePath, setFilePath] = useState("");
  const [Duration, setDuration] = useState("");
  const [ThumbnailPath, setThumbnailPath] = useState("");

  const onTitleChange = (e) => {
    setVideoTitle(e.currentTarget.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };

  const onPrivateChange = (e) => {
    setPrivate(e.currentTarget.value);
  };
  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value);
  };

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);
    console.log(formData);
    fetch("/api/video/uploadfiles", { method: "POST", body: formData }).then(
      (response) =>
        response
          .json()
          .then((data) => {
            console.log(data);
            let variable = {
              url: data.filePath,
              fileName: data.fileName,
            };
            // setFilePath(data.filePath);
            fetch("/api/video/thumbnail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(variable),
            }).then((response) => {
              setDuration(response.data.fileDuration);
              setThumbnailPath(response.data.filePath);
              alert("저장완료");
              // if (response.data.success) {

              // } else {
              //   alert("썸네일 생성에 실패하였습니다.");
              // }
              console.log(response);
            });
          })
          .catch((error) => {
            console.error(error);
            alert("비디오 업로드를 실패했습니다.");
          })
    );
  };
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <>
      <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Title level={2}>Upload Video</Title>
        </div>

        <Form onSubmit>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Drop Zone */}

            <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
              {({ getRootProps, getInputProps }) => (
                <div
                  style={{
                    width: "300px",
                    height: "240px",
                    border: "1px solid lightgray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <VerticalAlignTopOutlined style={{ fontSize: "3rem" }} />
                </div>
              )}
            </Dropzone>
            {/* 썸네일 */}

            {ThumbnailPath && (
              <div>
                <img
                  src={`http://localhost:5000/${ThumbnailPath}`}
                  alt="thumbnail"
                />
              </div>
            )}
          </div>
          <br />
          <br />
          <label>Title</label>
          <Input onChange={onTitleChange} value={VideoTitle} />
          <br />
          <br />
          <label>Description</label>
          <TextArea onChange={onDescriptionChange} value={Description} />
          <br />
          <br />

          <select onChange={onPrivateChange}>
            {PrivateOption.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <br />
          <br />
          <select onChange={onCategoryChange}>
            {CategoryOption.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <br />
          <br />
          <Button type="primary" size="large" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
export default VideoUploadPage;
