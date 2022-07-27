/** @format */

import React, { FC, useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Space, Button } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/crypto-api";
import { PoweroffOutlined } from "@ant-design/icons";
import { HomePageCoinsDataStatsTypes } from "../types";
import { Cryptocurrcies, News } from "../components";

const { Title } = Typography;

const HomePage: FC = () => {
  const { data, isLoading } = useGetCryptosQuery(10);
  const datas: any = data;
  const globalState: HomePageCoinsDataStatsTypes = datas?.data?.stats;

  if (isLoading) {
    return (
      <Space style={{ width: "100%" }}>
        <Button type="ghost" icon={<PoweroffOutlined />} loading />
      </Space>
    );
  } else {
    return (
      <>
        <Title level={2} className="heading">
          Global Crypto Stats
        </Title>
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalState.total}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalState.totalExchanges)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={millify(Number(globalState.totalMarketCap))}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h Volume"
              value={millify(Number(globalState.total24hVolume))}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(globalState.totalMarkets)}
            />
          </Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Top 10 Cryptocurrencies in the world
          </Title>
          <Title level={2} className="show-more">
            <Link to="/cryptocurrcies">Show More</Link>
          </Title>
        </div>
        <Cryptocurrcies simpliFied={true} />
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Latest Crypto News
          </Title>
          <Title level={2} className="show-more">
            <Link to="/news">Show More</Link>
          </Title>
        </div>
        <News simpliFied={true} />
      </>
    );
  }
};

export default HomePage;
