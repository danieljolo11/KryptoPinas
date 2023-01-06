import React, { FC, useState } from "react";
import "antd/dist/reset.css";
import "../App.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { gql, useMutation, useQuery } from "@apollo/client";

const SIGN_IN = gql`
  mutation loginUserAction($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      username
      status
      message
    }
  }
`;

const SIGN_UP = gql`
  mutation createUserAction($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      status
      message
    }
  }
`;

const Login: FC = () => {
  interface Form {
    username: string;
    password: string;
  }
  interface RegisterForm {
    username: string;
    password: string;
  }

  const [formType, setFormType] = useState<string>("");

  const [loginUser] = useMutation(SIGN_IN);
  const [createUser] = useMutation(SIGN_UP);

  const onFinish = async (values: Form) => {
    loginUser({
      variables: { ...values },
    })
      .then(({ data }) => {
        console.log("login", data);
      })
      .catch((error) => {
        console.log("LoginError", error);
      });
  };

  const onRegister = async (values: RegisterForm) => {
    await createUser({
      variables: { ...values },
    })
      .then(({ data }) => {
        console.log("register", data);
      })
      .catch((error) => {
        console.log("RegisterError", error);
      });
  };

  const renderLoginForm = (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          shape="round"
          block
        >
          Log in
        </Button>

        <a className="register" onClick={() => setFormType("Register")}>
          Register
        </a>
      </Form.Item>
    </Form>
  );

  const renderRegisterForm = (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onRegister}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Name" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password" }]}
      >
        <Input type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          shape="round"
          block
        >
          Register
        </Button>

        <a className="registerback" onClick={() => setFormType("Login")}>
          Back
        </a>
      </Form.Item>
    </Form>
  );

  return (
    <div className="App">
      <Card
        title={formType === "Register" ? "Sign Up" : "Sign In"}
        bordered={false}
        style={{ width: 350 }}
        hoverable={true}
        loading={false}
      >
        {formType === "Register" ? renderRegisterForm : renderLoginForm}
      </Card>
    </div>
  );
};

export default Login;
