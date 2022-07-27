/** @format */

import { CryptoApiHeadersTypes, getCryptoNewsTypes } from "../types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders: CryptoApiHeadersTypes = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "c20a05816fmsh80d3a03dc9ea085p183125jsn64353cbd33c2",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "crypto-news-api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<unknown, getCryptoNewsTypes>({
      query: ({ newsCategory, count }: getCryptoNewsTypes) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
