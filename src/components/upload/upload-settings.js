import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Select, Space, Upload } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

const UploadSettings = () => {
  const params = useParams();
  const [data, setData] = useState({ title: "", model: "" });

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/api/settings/${params.id}`);
      setData(res.data);
    }
    fetchData();
  }, []);

  const onFinish = (values) => {
    axios
      .post(`/api/header-change/${params.id}`, {
        title: values.title,
        model: values.model,
      })
      .then(() => {
        message.success("Title changed successfully.");
      })
      .catch(() => {
        message.error("Title change failed");
      });
  };

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      title: data.title,
      model: data.model,
    });
  }, [data]);

  return (
    <>
      <h2 style={{ marginTop: 20 }}>Settings</h2>
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
          form={form}
        >
          <Form.Item label="Model" name="model">
            <Select
              options={[
                { value: "text-davinci-003", label: "GPT-3" },
                { value: "gpt-3.5-turbo", label: "GPT-3.5" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Title" name="title">
            <Input placeholder="Input chat room title" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Change
            </Button>
          </Form.Item>
        </Form>

        <Upload
          action={`/api/header-upload/${params.id}`}
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Header Image Upload</Button>
        </Upload>

        <Upload
          action={`/api/botimg-upload/${params.id}`}
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Bot Image Upload</Button>
        </Upload>

        <Upload
          action={`/api/userimg-upload/${params.id}`}
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
