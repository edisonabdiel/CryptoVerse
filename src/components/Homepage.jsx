// React Modules
import React from 'react';
import { Link } from 'react-router-dom';
// Millify
import millify from 'millify';
// Ant Design components
import { Typography, Row, Col, Statistic } from 'antd';
// Custom API
import { useGetCryptosQuery } from '../services/cryptoApi';
//Custom Components
import { Cryptocurrencies, News, Loader } from '../components';
 

// Typography destructuring
const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return <Loader />;

    return (
        <>
            <Title level={2} className="heading" >Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Crypto Currencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container" >
                <Title level={2} className="home-title" >Top Global Cryptocurrencies</Title>
                <Title level={3} className="show-more" ><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title" >Hottest Crypto News</Title>
                <Title level={3} className="show-more" ><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified/>
        </>
    )
}

export default Homepage;
