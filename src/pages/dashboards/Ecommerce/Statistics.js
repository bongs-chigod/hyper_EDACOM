// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsWidget from '../../../components/StatisticsWidget';
import {Map} from "google-maps-react";

const Statistics = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <StatisticsWidget
                        icon="mdi mdi-account-multiple"
                        description="Number of Customers"
                        title="탄소배출량"
                        stats="0"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
                <Col>
                   <StatisticsWidget
                        icon="mdi mdi-currency-usd"
                        description="Revenue"
                        title="적립된 포인트"
                        stats="0P"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '7.00%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
