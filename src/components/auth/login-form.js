import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Row, Col, Card } from "antd";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";

import { login, loginGoogle } from "./auth-actions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);

  if (user) return <Navigate to="/upload/1" />;

  const handleLogin = (value) => {
    const formData = new FormData();
    formData.append("username", value.email);
    formData.append("password", value.password);
    dispatch(login(formData));
  };

  const handleGoogleSuccess = (res) => {
    dispatch(loginGoogle({ token: res.credential }));
  };

  const handleGoogleFailure = (err) => console.error(err);

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
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
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ float: "left" }}>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="form-button">
                Log in
              </Button>
              Or <NavLink to="/register">register now!</NavLink>
            </Form.Item>
          </Form>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;
