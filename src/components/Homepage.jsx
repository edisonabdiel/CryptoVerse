// React Modules
import React from 'react';
import { Link } from 'react-router-dom';
// Millify
import millify from 'millify';
// Ant Design components
import { Typography, Row, Col, Statistic } from 'antd';
// Custom API
import { useGetCryptosQuery } from '../services/cryptoApi';

// Typography destructuring
const { Title } = Typography;

const Homepage = () => {
const { data, isFetching } = useGetCryptosQuery();

    console.log(data);

    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Crypto Currencies" value="5" /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
                <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
            </Row>
        </>
    )
}

export default Homepage;
