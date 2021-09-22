import React, { useState } from 'react';

import Loader from './Loader'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Loading3QuartersOutlined } from '@ant-design/icons';

const News = ({ simplified }) => {
    const [newsCathegory, setNewsCathegory] = useState('Cryptocurrencies');
    const { data } = useGetCryptoNewsQuery(100);
    const { data: cryptoNews } = useGetCryptosQuery({ newsCathegory, count: simplified ? 6 : 12 });

if(!cryptoNews) return <Loader />

    return (
        <div>
            News
        </div>
    )
}

export default News;
