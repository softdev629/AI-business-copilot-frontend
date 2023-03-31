import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Space, Upload } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

const UploadSettings = () => {
  const params = useParams();

  const onFinish = (values) => {
    axios
      .post(`http://localhost:9000/api/header-change/${params.id}`, {
        title: values.title,
      })
      .then(() => {
        message.success("Title changed successfully.");
      })
      .catch(() => {
        message.error("Title change failed");
      });
  };

  return (
    <>
      <h2 style={{ color: "white", marginTop: 20 }}>Settings</h2>
      <Space
        className="settings-container"
        align="center"
        direction="vertical"
        size="large"
      >
        <Form
          name="settings"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          align="left"
        >
          <Form.Item
            label={<label style={{ color: "white" }}>Title</label>}
            name="title"
          >
            <Input placeholder="Input chat room title" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Change
            </Button>
          </Form.Item>
        </Form>

        <Upload
          action={`http://localhost:9000/api/header-upload/${params.id}`}
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Header Image Upload</Button>
        </Upload>

        <Upload
          action={`http://localhost:9000/api/botimg-upload/${params.id}`}
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Bot Image Upload</Button>
        </Upload>

        <Upload
          action={`http://localhost:9000/api/userimg-upload/${params.id}`}
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>User Image Upload</Button>
        </Upload>
      </Space>
    </>
  );
};

export default UploadSettings;
