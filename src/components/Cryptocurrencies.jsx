import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import millify from 'millify';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 12 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // Gets executed whenever the dependencies array changes. 
    useEffect(() => {

        const filteredCryptos = cryptosList?.data?.coins.filter((crypto) => (
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        setCryptos(filteredCryptos);

    }, [cryptosList, searchTerm]);

    if (isFetching) return <Loader />;


    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col key={currency.id} xs={24} sm={12} lg={6} className="crypto-card" span={12} >
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}, ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />}
                                style={{borderRadius: '3%'}}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies;
