import React, { useState } from "react";
import { Space, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const { Dragger } = Upload;

const PDFUpload = () => {
  const [url, setUrl] = useState(null);

  const draggerProps = {
    maxCount: 1,
    action: "http://localhost:5000/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status === "done")
        message.success(`${info.file.name} file uploaded successfully.`);
      else if (status === "error")
        message.error(`${info.file.name} file upload failed.`);
    },
    beforeUpload(file) {
      setUrl(URL.createObjectURL(file));
    },
  };

  return (
    <Space direction="vertical" size="large" align="center">
      <Dragger {...draggerProps} style={{ width: 250, marginTop: 20 }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
      <Worker workerUrl="/assets/js/pdf.worker.js">
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            height: 300,
            width: 250,
          }}
        >
          {url && <Viewer fileUrl={url}></Viewer>}
        </div>
      </Worker>
    </Space>
  );
};

export default PDFUpload;
