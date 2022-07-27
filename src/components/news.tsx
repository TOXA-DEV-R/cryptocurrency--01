/** @format */

import { PoweroffOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row, Space, Typography } from "antd";
import moment from "moment";
import React, { FC } from "react";
import { useGetCryptoNewsQuery } from "../services/crypto-news-api";
import { NewsPageTypes } from "../types";

const { Title, Text } = Typography;

const NewsPage: FC<NewsPageTypes> = ({ simpliFied }) => {
  const { data, isLoading } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simpliFied ? 6 : 12,
  });
  const datas: any = data;
  const cryptoNews: any[] = datas?.value;
  console.log(cryptoNews);
  if (isLoading) {
    return (
      <Space style={{ width: "100%" }}>
        <Button type="ghost" icon={<PoweroffOutlined />} loading />
      </Space>
    );
  } else {
    return (
      <Row gutter={[24, 24]}>
        {cryptoNews.length > 0
          ? cryptoNews.map((news, index: number) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card hoverable className="news-card">
                  <a href={news.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={4}>
                        {news.name}
                      </Title>
                      <img
                        src={news?.image?.thumbnail?.contentUrl}
                        alt={news?.name}
                        style={{
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <p>
                      {news?.description > 100
                        ? (news?.description as string).substring(0, 100)
                        : news?.description}
                    </p>
                    <div className="provider-container">
                      <div>
                        <Avatar
                          src={news?.provider[0]?.image?.thumbnail?.contentUrl}
                        />
                        <Text className="provider-name">
                          {news?.provider[0]?.name}
                        </Text>
                      </div>
                      <Text>
                        {moment(String(news?.datePublished))
                          .startOf("ss")
                          .fromNow()}
                      </Text>
                    </div>
                  </a>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    );
  }
};

export default NewsPage;
