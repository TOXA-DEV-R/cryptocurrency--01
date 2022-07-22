/** @format */

import React, { FC } from "react";
import { Avatar, Button, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import icon from "../assets/images/cryptocurrency.png";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

const Navbar: FC = () => {
  const menuItems = [
    { icon: <HomeOutlined />, path: "/", label: "Home" },
    {
      icon: <FundOutlined />,
      path: "/cryptocurrcies",
      label: "Cryptocurrency",
    },
    { icon: <MoneyCollectOutlined />, path: "/exchanges", label: "Exchanges" },
    { icon: <BulbOutlined />, path: "/news", label: "News" },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button className="menu-control-container">
          <MenuOutlined />
        </Button>
      </div>
      <Menu theme="dark">
        {menuItems.map((item, index) => (
          <Menu.Item key={index} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
