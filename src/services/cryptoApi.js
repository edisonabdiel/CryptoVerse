import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// API headers to be replaced with enviorment variables
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b9a1dce4ccmsh750ae6fd20fcaaap1ad8fajsn135a21ffe1e2'
}

const baseURL = 'https://coinranking1.p.rapidapi.com';
// Utility function to add headers and url to the API call
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;


console.log(cryptoApi);

