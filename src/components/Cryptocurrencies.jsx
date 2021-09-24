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
                {cryptos?.map((cryptoCurrency) => (
                    <Col key={cryptoCurrency.id} xs={24} sm={12} lg={6} className="crypto-card" span={12} >
                        <Link to={`/crypto/${cryptoCurrency.id}`}>
                            <Card
                                title={`${cryptoCurrency.rank}, ${cryptoCurrency.name}`}
                                extra={<img className="crypto-image" src={cryptoCurrency.iconUrl} alt={cryptoCurrency.name} />}
                                style={{borderRadius: '3%'}}
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
