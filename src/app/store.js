import { configureStore } from '@reduxjs/toolkit';
// Crypto custom API
import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
});