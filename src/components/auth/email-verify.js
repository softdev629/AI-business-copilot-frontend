import { Button, Card, Col, Form, Input, Row, message } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { URI } from "../../constant";

const EmailVerify = () => {
  const params = useParams();
  const navigate = useNavigate();

  const onVerify = (value) => {
    axios
      .get(`${URI}/api/auth/verifyemail/${value.verify_code}`)
      .then(({ data }) => {
        message.success(data.message);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={20} sm={16} md={12} xl={6}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Form
            onFinish={onVerify}
            initialValues={{ verify_code: params.code }}
          >
            <Form.Item
              name="verify_code"
              rules={[{ required: true, message: "Input verification code" }]}
            >
              <Input placeholder="Verification Code" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="form-button">
                Verify
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default EmailVerify;
