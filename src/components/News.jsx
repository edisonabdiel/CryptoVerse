import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Card, Row, Col, Avatar, Select, Typography } from 'antd';
import moment from 'moment';
import Loader from './Loader';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data, isFetching } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 21 });

    console.log(cryptoNews);

    if (!cryptoNews || isFetching) return <Loader />

    return (
        <>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a Crypto"
                            optionFilterProp="children"
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Cryptocurrency">Cryptocurrency</Option>
                            {data?.data?.coins.map(coin => (
                                <Option key={coin.id} value={coin.name}>{coin.name}</Option>
                            ))}
                        </Select>
                    </Col>
                )}
                {cryptoNews.value.map((news) => (
                    <Col xs={24} sm={12} lg={8} key={news.id}>
                        <Card className="news-card" hoverable style={{borderRadius: '3%'}}>
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>{news.name}</Title>
                                    <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news.name} style={{ borderRadius: '5%', maxWidth: '200px', maxHeight: '100px'}}/>
                                </div>
                                <p>
                                    {news.description > 80
                                        ? news.description.substring(0, 80) + '...'
                                        : news.description}
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                        <Text className="provider-name" style={{fontSize: '0.8rem'}}>{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text style={{fontSize: '0.8rem'}}>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default News;
