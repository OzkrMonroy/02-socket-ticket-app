import { Button, Divider, Form, Input, InputNumber, Typography } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUserInfo } from "../helpers/getUserInfo";
import { useState } from "react";
const { Title, Text } = Typography;

export const LoginPage = () => {
  const navigate = useNavigate();
  const [agent] = useState(getUserInfo());
  useHideMenu(false);

  const onFinish = ({ username, desknumber }) => {
    localStorage.setItem("agent", username);
    localStorage.setItem("desk", desknumber);
    navigate("/desk", { replace: true });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (agent.agent && agent.desk) {
    return <Navigate to={"/desk"} replace />;
  }

  return (
    <>
      <Title level={2}>Login</Title>
      <Text>Enter your name and your number desk</Text>
      <Divider />

      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desk number"
          name="desknumber"
          rules={[
            {
              required: true,
              message: "Please input your desk number!",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
