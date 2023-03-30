import React, { useState } from "react";
import { Space, message, Upload } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { useParams } from "react-router-dom";

import "@react-pdf-viewer/core/lib/styles/index.css";

const { Dragger } = Upload;

const FileUpload = () => {
  const [url, setUrl] = useState(null);
  const [type, setType] = useState(null);
  const [textContent, setTextContent] = useState(null);
  const params = useParams();

  const draggerProps = {
    maxCount: 1,
    action: `http://localhost:9000/api/pdf/upload/${params.id}`,
    onChange(info) {
      const { status } = info.file;

      if (status === "done")
        message.success(`${info.file.name} file uploaded successfully.`);
      else if (status === "error")
        message.error(`${info.file.name} file upload failed.`);
    },
    beforeUpload(file) {
      setType(file.type);

      let fileReader = new FileReader();
      fileReader.onload = () => {
        setTextContent(fileReader.result);
      };
      fileReader.readAsText(file);

      setUrl(URL.createObjectURL(file));
    },
  };

  return (
    <>
      <h2 className="file-upload__header">Upload Files</h2>
      <Space
        direction="vertical"
        size="large"
        align="center"
        className="file-upload__container"
      >
        <Dragger {...draggerProps} style={{ width: 250, marginTop: 20 }}>
          <p className="ant-upload-drag-icon">
            <FilePdfOutlined style={{ color: "white" }} />
          </p>
          <p className="ant-upload-text" style={{ color: "white" }}>
            Drag & Drop Files Or{" "}
            <span style={{ color: "rgb(182, 156, 93)" }}>Browse</span>
          </p>
          <p className="ant-upload-hint" style={{ color: "rgb(92, 92, 92)" }}>
            Supported formats: PDF, .txt
          </p>
        </Dragger>
        {type === "application/pdf" && (
          <Worker workerUrl="/assets/js/pdf.worker.js">
            <div className="pdf-view__container">
              {url && <Viewer fileUrl={url}></Viewer>}
            </div>
          </Worker>
        )}
        {type === "text/plain" && (
          <div className="text-view__container">
            <p>{textContent}</p>
          </div>
        )}
      </Space>
    </>
  );
};

export default FileUpload;
