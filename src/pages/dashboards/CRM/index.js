// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import CampaignsChart from './CampaignsChart';
import RevenueChart from './RevenueChart';
import Leads from './Leads';
import Performers from './Performers';
import CampaignWidget from './CampaignWidget';
import Statistics2 from '../CRM/Statistics2';
import RevenuChart2 from './RevenuChart2.js';
import PerformanceChart2 from './PerformanceChart2.js';

const CRMDashboardPage = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/crm' },
                    { label: '전력사용량', path: '/dashboard/crm', active: true },
                ]}
                title={'전력사용량'}
            />

            {/*<Statistics />*/}

            <Row>
                {/*<Col xl={5}>*/}
                {/*    <CampaignsChart />*/}
                {/*</Col>*/}
                <Col xl={12}>
                    <RevenueChart />
                </Col>
            </Row>

            <Row>
                 <Col xl={8} lg={4}>
                    <RevenuChart2 />
                </Col>
                {/*<Col xl={4} lg={4}>*/}
                {/*    <Performers />*/}
                {/*</Col>*/}
                {/*<Col xl={4} lg={4}>*/}
                {/*    <Leads />*/}
                {/*</Col>*/}
                <Col xl={4} lg={4}>
                    {/*<CampaignWidget />*/}
                    <Statistics2 />
                </Col>
            </Row>

            <Row>
                 <Col xl={12} lg={4}>
                    <PerformanceChart2 />
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default CRMDashboardPage;
