import { Button, Col, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export const CreateTicketPage = () => {
  const createTicket = () => {
    console.log("Creating...");
  };
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Typography.Title level={3}>
            Press the button to create a ticket
          </Typography.Title>
          <Button
            type="primary"
            shape="round"
            icon={DownloadOutlined}
            size="large"
            onClick={createTicket}
          >
            New ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Typography.Text level={2}>Their number</Typography.Text>
          <Typography.Text type="success" style={{ fontSize: 55 }}>
            55
          </Typography.Text>
        </Col>
      </Row>
    </>
  );
};
