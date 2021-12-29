import React, { Component } from "react";
import {
  Layout,
  Typography,
  Menu,
  Button,
  Avatar,
  Dropdown,
  Select,
} from "antd";
import Icon from "@ant-design/icons";
import "./App.css";
import HomeIcon from "./Assets/Home.svg";
import People from "./Assets/people.svg";
import Case from "./Assets/case.svg";
import CalendarIcon from "./Assets/calendar.svg";
import ReportIcon from "./Assets/report.svg";
import Setting from "./Assets/setting.svg";
import logo from "./Assets/B.svg";
import avatar from "./Assets/Ellipse 4.svg";
import profile1 from "./Assets/Rectangle 36.svg";
import team from "./Assets/team";

import "react-circular-progressbar/dist/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  createFromIconfontCN,
  SearchOutlined,
  BellOutlined,
  DownOutlined,
  MoreOutlined,
  UserOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;
const { Option } = Select;

const percentage1 = 50;
const percentage2 = 25;
const percentage3 = 59;
const percentage4 = 75;

const data = [
  {
    name: "Jan",
    Received: 100,
    Completed: 50,
  },
  {
    name: "Feb",
    Received: 110,
    Completed: 90,
  },
  {
    name: "Mar",
    Received: 130,
    Completed: 60,
  },
  {
    name: "Apr",
    Received: 115,
    Completed: 100,
  },
  {
    name: "May",
    Received: 70,
    Completed: 40,
  },
  {
    name: "June",
    Received: 110,
    Completed: 90,
  },
];

const Home = () => <img src={HomeIcon} />;

const myTeam = () => <img src={People} />;

const Task = () => <img src={Case} />;

const Calendar = () => <img src={CalendarIcon} />;

const Report = () => <img src={ReportIcon} />;

const Settings = () => <img src={Setting} />;

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const getIntroOfPage = (label) => {
  if (label === "Jan") {
    return "Project Meeting with";
  }
  if (label === "Feb") {
    return "Board meeting with";
  }
  if (label === "Mar") {
    return "Monthly updates with";
  }
  if (label === "Apr") {
    return "KRA Review with";
  }
  if (label === "May") {
    return "Project meeting with";
  }
  if (label === "June") {
    return "Appraisal meeting with";
  }
  return "";
};

const menu = (
  <Menu>
    <Menu.Item key="0">1st menu item</Menu.Item>
    <Menu.Item key="1">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="intro">{getIntroOfPage(label)}</p>
        <Avatar.Group>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <Avatar
            style={{
              backgroundColor: "#f56a00",
            }}
          >
            K
          </Avatar>

          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />

          <Avatar
            style={{
              backgroundColor: "#1890ff",
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
    );
  }
  return null;
};

const App = () => (
  <div className="App">
    <Layout>
      <Sider style={{ background: "#f7f9fd" }}>
        <div className="title">
          <img src={logo} alt=""></img>
        </div>
        <Menu
          style={{ background: "#f7f9fd" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="1">
            <Icon component={Home} />
            <span className="menu-content">Dashboard</span>
          </Menu.Item>

          <Menu.Item key="2">
            <Icon component={myTeam} />
            <span className="menu-content">My Team</span>
          </Menu.Item>

          <Menu.Item key="3">
            <Icon component={Task} />
            <span className="menu-content">Task</span>
          </Menu.Item>

          <Menu.Item key="4">
            <Icon component={Calendar} />
            <span className="menu-content">Calendar</span>
          </Menu.Item>

          <Menu.Item key="5">
            <Icon component={Report} />
            <span className="menu-content">Report</span>
          </Menu.Item>

          <Menu.Item key="6">
            <Icon component={Settings} />
            <span className="menu-content">Settings</span>
          </Menu.Item>
        </Menu>

        <Button type="primary" size="large">
          <IconFont type="icon-tuichu" /> Logout
        </Button>
      </Sider>
      <Layout>
        <Header style={{ background: "#FAFBFD" }}>
          <Title level={5}>Dashboard</Title>
          <div className="header-icons-wrapper">
            <div className="header-icons">
              <SearchOutlined />
              <BellOutlined />
              <Avatar src={avatar} />
              <DownOutlined />
            </div>
          </div>
        </Header>

        <Content style={{ background: "#FAFBFD" }}>
          <div className="dashboard">
            <div className="analytics">
              <div className="card1">
                <div className="card-title">
                  Works
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="card-desc">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={percentage1}
                      text={`${percentage1}%`}
                      strokeWidth={6}
                      styles={buildStyles({
                        textColor: "rgba(255, 211, 57, 1)",
                        pathColor: "rgba(255, 211, 57, 1)",
                        trailColor: "rgba(31, 33, 39, 0.06)",
                      })}
                    />
                  </div>
                  <div className="card-data">
                    <span>75</span>
                    <div>Works Today</div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="card-title">
                  Analytics
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="card-desc">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={percentage2}
                      text={`${percentage2}%`}
                      strokeWidth={6}
                      styles={buildStyles({
                        textColor: "rgba(255, 109, 57, 1)",
                        pathColor: "rgba(255, 109, 57, 1)",
                        trailColor: "rgba(31, 33, 39, 0.06)",
                      })}
                    />
                  </div>
                  <div className="card-data">
                    <span>310</span>
                    Analytics Today
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="card-title">
                  Statistics
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="card-desc">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={percentage3}
                      text={`${percentage3}%`}
                      strokeWidth={6}
                      styles={buildStyles({
                        textColor: "rgba(149, 57, 255, 1)",
                        pathColor: "rgba(149, 57, 255, 1)",
                        trailColor: "rgba(31, 33, 39, 0.06)",
                      })}
                    />
                  </div>

                  <div className="card-data">
                    <span>75</span>
                    Works Today
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="card-title">
                  Tasks
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="card-desc">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={percentage4}
                      text={`${percentage4}%`}
                      strokeWidth={6}
                      styles={buildStyles({
                        textColor: "rgba(57, 84, 255, 1)",
                        pathColor: "rgba(57, 84, 255, 1)",
                        trailColor: "rgba(31, 33, 39, 0.06)",
                      })}
                    />
                  </div>
                  <div className="card-data">
                    <span>15</span>
                    Tasks Today
                  </div>
                </div>
              </div>
            </div>

            <div className="bar-graph">
              <div className="card-title">
                Task Activities
                <div className="legend">
                  <div className="legend1"></div>
                  Received
                  <div className="legend2"></div>
                  Completed
                </div>
                <div className="dropdown-wrapper">
                  <Select
                    defaultValue="months"
                    style={{ width: 120 }}
                    bordered={false}
                  >
                    <Option value="month">1 month</Option>
                    <Option value="months">6 months</Option>
                    <Option value="year">1 year</Option>
                  </Select>
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreOutlined />
                    </a>
                  </Dropdown>
                </div>
              </div>
              <BarChart
                width={450}
                height={180}
                data={data}
                margin={{
                  top: 10,
                  left: 5,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="0.25" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis axisLine={false} tickLine={false} tickCount={5} />
                <Tooltip />
                <Bar dataKey="Received" fill="#3954FF" barSize={5} />
                <Bar dataKey="Completed" fill="#FFD339" barSize={5} />
              </BarChart>
            </div>

            <div className="area-chart">
              <div className="card-title">
                Team Activities
                <div className="dropdown-wrapper">
                  <Select
                    defaultValue="months"
                    style={{ width: 120 }}
                    bordered={false}
                  >
                    <Option value="month">1 month</Option>
                    <Option value="months">6 months</Option>
                    <Option value="year">1 year</Option>
                  </Select>
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreOutlined />
                    </a>
                  </Dropdown>
                </div>
              </div>

              <ResponsiveContainer width="95%" height="80%">
                <AreaChart
                  width={600}
                  height={200}
                  data={data}
                  margin={{ top: 10, right: 20, left: 50, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#3954FF2E"
                        stopOpacity={0.8}
                      />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis hide={true} />
                  <CartesianGrid vertical={false} strokeDasharray="0.25" />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="Completed"
                    stroke="#3954FF"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="performance">
              <div className="card-title">Team Member Performance</div>

              {team.map((item, idx) => {
                return (
                  <div className="profile-wrapper">
                    <div className="profile">
                      <div className="image">
                        <img src={profile1}></img>
                      </div>
                      <div className="profile-details">
                        <span className="name">{item.name}</span>
                        <span className="designation">{item.designation}</span>
                      </div>
                      <div className="rating">{item.performance}</div>
                    </div>
                    <span className="divider"></span>
                  </div>
                );
              })}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default App;
