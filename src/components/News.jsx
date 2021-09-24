import React, { useState } from 'react';

import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import Loader from './Loader';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const News = ({ simplified }) => {
    const [newsCathegory, setNewsCathegory] = useState('Cryptocurrencies');
    const { data } = useGetCryptoNewsQuery(100);
    const { data: cryptoNews } = useGetCryptosQuery({ newsCathegory, count: simplified ? 6 : 12 });

    if (!cryptoNews) return <Loader />

    return (
        <div>
            News
        </div>
    )
}

export default News;
