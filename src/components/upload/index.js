import { Row, Col } from "antd";
import React from "react";

import FileUpload from "./file-upload-dom";
import YoutubeLinkDom from "./youtube-link-dom";
import UploadSettings from "./upload-settings";

const TrainPage = () => {
  return (
    <>
      <Row
        style={{
          height: "max('fit-content', 100vh)",
        }}
      >
        <Col span={8}>
          <FileUpload />
        </Col>
        <Col span={8}>
          <UploadSettings />
        </Col>
        <Col span={8}>
          <YoutubeLinkDom />
        </Col>
      </Row>
    </>
  );
};

export default TrainPage;
