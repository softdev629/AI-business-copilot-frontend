import { Row, Col } from "antd";
import React from "react";
import FileUpload from "./file-upload-dom";
import YoutubeLinkDom from "./youtube-link-dom";

import "./index.css";

const TrainPage = () => {
  return (
    <>
      <Row
        style={{ backgroundColor: "rgb(16, 16, 16)", height: "fit-content" }}
      >
        <Col span={12}>
          <FileUpload />
        </Col>
        <Col span={12}>
          <YoutubeLinkDom />
        </Col>
      </Row>
    </>
  );
};

export default TrainPage;
