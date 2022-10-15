import { Button, Col, Divider, Row, Typography } from "antd";
import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { useState } from "react";
import { getUserInfo } from "../helpers/getUserInfo";
import { Navigate, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export const DeskPage = () => {
  const navigate = useNavigate();
  useHideMenu(false);
  const [agent] = useState(getUserInfo());

  const onLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const onNext = () => {
    console.log("Next...");
  };

  if (!agent.agent || !agent.desk) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{agent.agent}</Title>
          <Text>You are working on the desk number: </Text>
          <Text type="success">{agent.desk}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={onLogout}>
            Logout
            <CloseOutlined />
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>You are working with the ticket number: </Text>
          <Text type="danger" style={{ fontSize: 30 }}>
            5
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={8} span={16} align="right">
          <Button shape="round" type="primary" onClick={onNext}>
            <ArrowRightOutlined />
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
