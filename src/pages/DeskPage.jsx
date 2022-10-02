import { Button, Col, Divider, Row, Typography } from "antd";
import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export const DeskPage = () => {
  const onLogout = () => {
    console.log("Logout...");
  };

  const onNext = () => {
    console.log("Next...");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Oscar</Title>
          <Text>You are working on the desk number: </Text>
          <Text type="success">5</Text>
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
