import React from "react";
import { Form, Input, Button, Row, Col, Card, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { URI } from "../../constant";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleRegister = (value) => {
    // Handle registration logic here
    axios.post(`${URI}/api/register`, value).then(() => {
      message.success("Successfully Registered!");
      navigate("/login");
    });
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card>
          <Form
            name="normal_register"
            initialValues={{ remember: true }}
            onFinish={handleRegister}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email Address"
              />
            </Form.Item>

            <Form.Item
              name="full_name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Name"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                type="phone"
                placeholder="Phone Number"
                prefix={<PhoneOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your Password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<CheckCircleOutlined className="site-form-item-icon" />}
                placeholder="Confirm"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="form-button">
                Register
              </Button>
            </Form.Item>

            <NavLink to="/login">Already have an account?</NavLink>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterForm;
