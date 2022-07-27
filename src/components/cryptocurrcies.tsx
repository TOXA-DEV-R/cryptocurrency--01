/** @format */

import { FC, useState, ChangeEvent, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/crypto-api";
import {
  CryptocurrciesTypesProps,
  HomePageCoinsDataCryptosTypes,
} from "../types";

const Cryptocurrcies: FC<CryptocurrciesTypesProps> = ({ simpliFied }) => {
  let count: number = simpliFied ? 10 : 100;
  const { data, isLoading } = useGetCryptosQuery(count);
  const datas: any = data;
  const cryptosList: any = datas?.data?.coins;
  const [cryptos, setCryptos] = useState(cryptosList);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const termSearchChanging = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setCryptos(
      cryptosList.filter((coin: { name: string }) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [cryptosList, searchTerm]);

  return (
    <>
      {!simpliFied && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            value={searchTerm}
            onChange={termSearchChanging}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos &&
          cryptos.map(
            (currency: HomePageCoinsDataCryptosTypes, index: number) => (
              <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
                <Link to={`/crypto/${currency.id}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      <img className="crypto-image" src={currency.iconUrl} />
                    }
                    hoverable
                  >
                    <p>Price: {millify(Number(currency.price))}</p>
                    <p>Market: {millify(Number(currency.marketCap))}</p>
                    <p>Daily Change: {millify(Number(currency.change))}%</p>
                  </Card>
                </Link>
              </Col>
            )
          )}
      </Row>
    </>
  );
};

export default Cryptocurrcies;
