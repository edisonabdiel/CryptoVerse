import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import millify from 'millify';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

    console.log(cryptos);


    return (
        <>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((cryptoCurrency) => (
                    <Col key={cryptoCurrency.id} xs={24} sm={12} lg={6} className="crypto-card" span={12} >
                        <Link to={`/crypto/${cryptoCurrency.id}`}>
                            <Card
                                title={`${cryptoCurrency.rank}, ${cryptoCurrency.name}`}
                                extra={<img className="crypto-image" src={cryptoCurrency.iconUrl} alt={cryptoCurrency.name} />}
                                hoverable
                            >
                                <p>Price: {millify(cryptoCurrency.price)}</p>
                                <p>Market Cap: {millify(cryptoCurrency.marketCap)}</p>
                                <p>Daily Change: {millify(cryptoCurrency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies;
