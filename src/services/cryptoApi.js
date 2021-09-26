import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// API headers to be replaced with enviorment variables
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b9a1dce4ccmsh750ae6fd20fcaaap1ad8fajsn135a21ffe1e2'
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
// Utility function to add headers and url to the API call
const baseURL = 'https://coinranking1.p.rapidapi.com';
// Endpoints calling the API, takes params coming from the redux hook
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
  }),
});

//Destructure the endpoints to be later used as redux hooks
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
