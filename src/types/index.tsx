/** @format */

export type CryptoApiHeadersTypes = {
  "X-RapidAPI-Key": string;
  "X-RapidAPI-Host": string;
  "X-BingApis-SDK"?: string;
};

export type HomePageCoinsDataStatsTypes = {
  total: number;
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
};

export type HomePageCoinsDataCryptosTypes = {
  id: number;
  rank: number;
  name: string;
  iconUrl: string;
  price: string;
  marketCap: string;
  change: string;
};

export type CryptocurrciesTypesProps = {
  simpliFied: boolean;
};

export type getCryptoNewsTypes = {
  newsCategory: string;
  count: number;
};

export type NewsPageTypes = {
  simpliFied: boolean;
};
