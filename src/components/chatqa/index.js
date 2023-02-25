import React from "react";
import { Layout } from "antd";

import PDFUpload from "./pdf-upload-dom";
import ChatBox from "./chatbox";

const { Content, Sider } = Layout;

const PDFChatQA = () => {
  return (
    <Layout>
      <Sider
        theme="light"
        width={300}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <PDFUpload />
      </Sider>
      <Content
        style={{
          marginLeft: 300,
          overflow: "auto",
          height: "100vh",
        }}
      >
        <ChatBox />
      </Content>
    </Layout>
  );
};

export default PDFChatQA;
