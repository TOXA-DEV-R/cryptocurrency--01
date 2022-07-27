/** @format */

import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Typography, Layout, Space } from "antd";
import { Navbar } from "./components";
import { CryptoDetailsPage, ExchangesPage, HomePage } from "./pages";
import { Cryptocurrcies, News } from "./components";
import { Link } from "react-router-dom";
import "./styles/app.css";

const App: FC = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<ExchangesPage />} />
              <Route
                path="/cryptocurrcies"
                element={<Cryptocurrcies simpliFied={false} />}
              />
              <Route path="/crypto/:coinId" element={<CryptoDetailsPage />} />
              <Route path="/news" element={<News simpliFied={false} />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            <Link to="/">
              Cryptoverse Inc.
              <br />
            </Link>
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
