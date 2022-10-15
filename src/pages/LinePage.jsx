import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import React from "react";
import { useHideMenu } from "../hooks/useHideMenu";
import { lineDummy } from "../mocks/lineDummt";

export const LinePage = () => {
  useHideMenu(true);

  return (
    <>
      <Typography.Title level={1}>Atending the customer</Typography.Title>
      <Row>
        <Col span={2}>
          <List
            dataSource={lineDummy.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Desk: {item.escritorio}</Tag>,
                  ]}
                >
                  <Typography.Title>No. {item.ticketNo}</Typography.Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={2}>
          <Divider>History</Divider>
          <List
            dataSource={lineDummy.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Typography.Text type="secondary">Desk: </Typography.Text>
                      <Tag color="magenta">{item.ticketNo}</Tag>
                      <Typography.Text type="secondary">
                        Agent:{" "}
                      </Typography.Text>
                      <Tag color="volcano">{item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
