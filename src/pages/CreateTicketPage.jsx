import { Button, Col, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";

const { Text, Title } = Typography;

export const CreateTicketPage = () => {
  useHideMenu(true);
  const createTicket = () => {
    console.log("Creating...");
  };
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Press the button to create a ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={createTicket}
          >
            New ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Their number</Text>
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
