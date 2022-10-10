import React from 'react';
import AboutBreadcrumb from '../src/components/client/AboutUs/AboutBreadcrumb';
import AboutHeader from '../src/components/client/AboutUs/AboutHeader';
import AboutPersonalized from '../src/components/client/AboutUs/AboutPersonalized';
import AboutStep from '../src/components/client/AboutUs/AboutStep';
import SellingCondition from '../src/components/client/AboutUs/SellingCondition';
import Layout from '../src/components/client/layout';

const AboutUs = () => {
    return (
        <Layout>
            <AboutBreadcrumb/>
            <AboutHeader/>
            <AboutStep/>
            <AboutPersonalized/>
            <SellingCondition/>
        </Layout>
    );
};

export default AboutUs;