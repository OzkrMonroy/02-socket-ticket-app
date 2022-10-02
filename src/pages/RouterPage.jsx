import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { CreateTicketPage } from "./CreateTicketPage";
import { DeskPage } from "./DeskPage";
import { LinePage } from "./LinePage";
import { LoginPage } from "./LoginPage";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key={"1"} icon={<UserOutlined />}>
              <Link to={"/login"}>Login</Link>
            </Menu.Item>
            <Menu.Item key={"2"} icon={<VideoCameraOutlined />}>
              <Link to={"/line"}>Line</Link>
            </Menu.Item>
            <Menu.Item key={"3"} icon={<UploadOutlined />}>
              <Link to={"/new-ticket"}>Create a ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/line" element={<LinePage />} />
              <Route path="/new-ticket" element={<CreateTicketPage />} />
              <Route path="/desk" element={<DeskPage />} />
              <Route path="*" element={<Navigate to={"/login"} replace />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
