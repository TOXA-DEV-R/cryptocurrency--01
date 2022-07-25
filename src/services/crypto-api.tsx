/** @format */

import { CryptoApiHeadersTypes } from "../types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders: CryptoApiHeadersTypes = {
  "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({
  url,
  headers: cryptoApiHeaders,
});

const cryptoApi = createApi({
  reducerPath: "crypto",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<string, unknown>({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };
